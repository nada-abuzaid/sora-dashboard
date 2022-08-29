import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { setLoading } from '../../store/loading';
import {
  AutoCompleteStyle,
  AutoCompleteContainer,
  TableTitle,
  TableContent,
  StyledTable,
} from '../Dashboard/styles';
import { getCompaniesData } from '../../services/callApi';
import Actions from './Actions';
import Subscription from './Subscription';
import Header from './Header';
import Empty from '../Empty';
import Emails from './Emails';

export default function AdminTable({ setIsOpen, isOpen }) {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const [filtredDataSource, setFiltredDataSource] = useState([]);
  const [setOptions] = useState([]);
  const [sort, setSort] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { loading } = useSelector((state) => state.loading.value);

  const columns = [
    {
      title: <TableTitle>Name</TableTitle>,
      dataIndex: 'name',
      key: '0',
      width: 100,
      render: (text) => <TableContent>{text}</TableContent>,
    },
    {
      title: <TableTitle>Email addresses</TableTitle>,
      dataIndex: 'email',
      key: '1',
      width: 120,
      render: (text) => <Emails setIsOpen={setIsOpen} emails={text} />
      ,
    },
    {
      title: <TableTitle>Coins bonus</TableTitle>,
      dataIndex: 'coins',
      key: '2',
      width: 70,
      render: (text) => <TableContent>{text}</TableContent>,
    },
    {
      title: <TableTitle>Employees allowed</TableTitle>,
      dataIndex: 'allowedEmployees',
      key: '3',
      width: 70,
      render: (text) => <TableContent>{text}</TableContent>,
    },
    {
      title: <TableTitle>Subscription type</TableTitle>,
      dataIndex: 'subscriptionType',
      key: '4',
      width: 70,
      render: (text) => <Subscription type={text} />,
    },
    {
      title: <TableTitle>Manage details</TableTitle>,
      key: '5',
      width: 80,
      render: (record) => (
        <Actions item={record} setDataSource={setDataSource} />
      ),
    },
  ];

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    const fetchData = async () => {
      dispatch(setLoading({ loading: true }));
      try {
        const data = await getCompaniesData();
        dispatch(setLoading({ loading: false }));
        setDataSource(data);
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

  return (
    <>
      {dataSource.length > 0 ? (
        <>
          <Header
            setSort={setSort}
            setFiltredDataSource={setFiltredDataSource}
            dataSource={dataSource}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
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
          </AutoCompleteContainer>
          <StyledTable
            columns={columns}
            dataSource={
              !filtredDataSource.length ? dataSource : filtredDataSource
            }
            scroll={{
              y: 600,
            }}
            loading={loading}
            pagination={false}
          />
        </>
      ) : (
        <Empty page="admin" isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

AdminTable.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
