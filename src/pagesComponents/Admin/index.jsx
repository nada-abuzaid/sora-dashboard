import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { setLoading } from '../../state/loading';
import { formatDate } from '../../utils';
import {
  AutoCompleteStyle, AutoCompleteContainer, TableTitle, TableContent, StyledTable,
} from '../Dashboard/styles';

export default function AdminTable() {
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
        const {
          data: { data },
        } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/companies`,
          {
            cancelToken: source.token,
          },
        );
        setDataSource(data);
        setOptions(data.map((company) => company.name));
        dispatch(setLoading({ loading: false }));
        return data;
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
      setFiltredDataSource(dataSource.sort((a, b) => a.timestamp > b.timestamp));
    }
  };

  return (
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
          <Option value="Newest first">
            Newest first
          </Option>
          <Option value="Oldesr first">
            Oldesr first
          </Option>
          <Option value="From A to Z">
            From A to Z
          </Option>
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
  );
}
