import { Table } from 'antd';
import React from 'react';

function AdminTable() {
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Action',
      key: 'operation',
      width: 200,
      render: () => (
        <button type="button" c>
          action
        </button>
      ),
    },
  ];
  const data = [];

  for (let i = 0; i < 100; i += 1) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      sticky
      bordered
      pagination={false}
    />
  );
}

export default AdminTable;
