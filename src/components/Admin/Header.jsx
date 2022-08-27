import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';

export default function Header({
  setSort, setFiltredDataSource, dataSource, setIsOpen,
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
      <button type="button" className="addEmployer-btn" onClick={() => setIsOpen(true)}>
        + Add Employer
      </button>
    </AdminTableHeader>
  );
}

const AdminTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  .addEmployer-btn {
    background-color: ${({ theme: { colors } }) => colors.secondaryGreen};
    color: ${({ theme: { colors } }) => colors.white};
    width: 10%;
    border: none;
    outline: none;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;
  }

  .ant-select.ant-select-single.ant-select-show-arrow {
    height: 2.5rem !important;
    width: 10%;
    div {
      height: 2.5rem;
      display: flex;
      align-items: center;
      .ant-select-selection-search,
      .ant-select-selection-item {
        height: 2.5rem;
        border: red;
      }
    }
  }
`;
