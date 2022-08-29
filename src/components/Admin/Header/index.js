import { Select } from 'antd';
import React from 'react';
import AdminTableHeader from './styles';

export default function Header({
  setSort,
  setFiltredDataSource,
  dataSource,
  setIsOpen,
  isOpen,
}) {
  const { Option } = Select;
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
    <AdminTableHeader>
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
      <button
        type="button"
        className="addEmployer-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        + Add Employer
      </button>
    </AdminTableHeader>
  );
}
