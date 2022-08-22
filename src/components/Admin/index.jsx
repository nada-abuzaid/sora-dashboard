/* eslint-disable no-unused-vars */
import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { setLoading } from '../../store/loading';
import formatDate from '../../utils/formatDate';
import {
  AutoCompleteStyle,
  AutoCompleteContainer,
  TableTitle,
  TableContent,
  StyledTable,
} from '../Dashboard/styles';
// import { COMPANIES_DATA } from '../../api/endpoints';
import Empty from '../Dashboard/Empty';

export default function AdminTable({ setIsOpen, isOpen }) {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const [filtredDataSource, setFiltredDataSource] = useState([]);
  const [setOptions] = useState([]);
  const [sort, setSort] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { loading } = useSelector((state) => state.loading.value);

  const { Option } = Select;

  const columns = [
    {
      title: <TableTitle>Company Name</TableTitle>,
      dataIndex: 'name',
      key: '0',
      width: 200,
      render: (text) => <TableContent>{text}</TableContent>,
    },
    {
      title: <TableTitle>Number of employees</TableTitle>,
      dataIndex: 'registeredEmployees',
      key: '1',
      width: 150,
      render: (text) => <TableContent>{text}</TableContent>,
    },
    {
      title: <TableTitle>Date of entry</TableTitle>,
      dataIndex: 'timestamp',
      key: '2',
      width: 150,
      render: (text) => <TableContent>{formatDate(text)}</TableContent>,
    },
    {
      title: <TableTitle>Company ID</TableTitle>,
      dataIndex: 'uniqueCode',
      key: '3',
      width: 150,
      render: (text) => <TableContent>{text}</TableContent>,
    },
  ];

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    const fetchData = async () => {
      dispatch(setLoading({ loading: true }));
      try {
        // const {
        //   data: { data },
        // } = await axios.get(`${COMPANIES_DATA}`);
        dispatch(setLoading({ loading: false }));
        // setDataSource(data);
        setOptions(dataSource.map((company) => company.name));
        return dataSource;
      } catch (error) {
        return error;
      }
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, [searchValue, sort]);

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const onSearchChange = (value) => {
    const filteredData = dataSource.filter(
      (item) => item.name.toUpperCase().includes(value.toUpperCase()),
    );
    setFiltredDataSource(filteredData);
  };

  const handleSort = ({ value }) => {
    if (value === 'From A to Z') {
      setSort(value);
      setFiltredDataSource(dataSource.sort((a, b) => a.name > b.name));
    } else if (value === 'Newest first') {
      setSort(value);
      setFiltredDataSource(
        dataSource.sort((a, b) => a.timestamp > b.timestamp),
      );
    }
  };

  return (
    <>
      {
      dataSource.length > 0 ? (
        <>
          <AutoCompleteContainer>
            <AutoCompleteStyle
              onSearch={onSearchChange}
              value={searchValue}
              placeholder="Search"
              onChange={handleChange}
            />
            <div className="icon">
              <AiOutlineSearch />
            </div>
            <Select
              labelInValue
              defaultValue={{
                value: '',
                label: 'Sort by',
              }}
              onChange={handleSort}
            >
              <Option value="Newest first">Newest first</Option>
              <Option value="Oldesr first">Oldesr first</Option>
              <Option value="From A to Z">From A to Z</Option>
            </Select>
          </AutoCompleteContainer>
          <StyledTable
            columns={columns}
            dataSource={!filtredDataSource.length ? dataSource : filtredDataSource}
            scroll={{
              y: 600,
            }}
            loading={loading}
            pagination={false}
          />
        </>
      ) : (
        <Empty page="admin" isOpen={isOpen} setIsOpen={setIsOpen} />
      )
    }
    </>
  );
}

AdminTable.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
