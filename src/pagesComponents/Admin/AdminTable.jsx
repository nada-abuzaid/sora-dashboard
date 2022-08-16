/* eslint-disable no-unused-vars */
import { Table, Select, Checkbox } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { setLoading } from '../../state/loading';
import formatDate from '../../utils/formatDate';
import { AutoCompleteStyle, AutoCompleteContainer } from '../Dashboard/styles';

function AdminTable() {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const [filtredDataSource, setFiltredDataSource] = useState([]);
  const [options, setOptions] = useState([]);
  const [sort, setSort] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { loading } = useSelector((state) => state.loading.value);

  const { Option } = Select;

  const handleChange = (value) => {
    setSearchValue(value);
  };

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
          data: { message, data },
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

const StyledTable = styled(Table)`
  padding: 0 40px;
  thead > tr > th {
    background-color: #89aaad33;
  }

  .ant-table-header {
    border-radius: 20px 20px 0 0;
  }

  .ant-table-container {
    border-radius: 20px 20px 0 0;
    box-shadow: inset 0px -4px 12px rgba(0, 0, 0, 0.1);
    width: 95%;
    height: 95%;
  }

  .ant-table.ant-table-fixed-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-table-body::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

  .ant-table-body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }

  .ant-table-body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    box-shadow: inset 0 0 14px 14px #bbbbbe;
    border: solid 9px transparent;
  }

  && tbody > tr:hover > td {
    background: rgba(137, 170, 173, 0.1);
  }
`;

const TableTitle = styled.p`
  font-size: 16px;
  color: #275c61;
  font-weight: bold;
`;

const TableContent = styled.p`
  font-size: 16px;
  color: #292929;
`;

export default AdminTable;
