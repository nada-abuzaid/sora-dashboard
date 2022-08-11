import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setLoading } from '../../state/loading';
import formatDate from '../../utils/formatDate';

function AdminTable() {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const { loading } = useSelector((state) => state.loading.value);

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
    const fetchData = async () => {
      dispatch(setLoading({ loading: true }));
      try {
        const { data: { message, data } } = await axios.get('/api/v1/companies');
        if (message === 'success') {
          setDataSource(data);
          dispatch(setLoading({ loading: false }));
          return data;
        }
        return [];
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, []);

  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      scroll={{
        y: 600,
      }}
      loading={loading}
      pagination={false}
    />
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
