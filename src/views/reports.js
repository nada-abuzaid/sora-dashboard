import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { TableHeader } from '../components/Reports/style';
import Download from '../assets/svgs/Download.svg';
import Report from '../components/Reports';

export default function Reports() {
  const { Option } = Select;

  const handleSort = ({ value }) => {
    console.log(value);
  };

  return (
    <ReportsStyle>
      <TableHeader>
        <Select
          labelInValue
          defaultValue={{
            value: '',
            label: 'Sort by',
          }}
          onChange={handleSort}
        >
          <Option value="Latest first">Latest First</Option>
          <Option value="Oldest first">Oldest first</Option>
        </Select>
        <button
          type="button"
          className="download-btn btn"
        >
          <img src={Download} alt="Download.svg" width={15} />
          Download All
        </button>
      </TableHeader>
      <div className="all-reports">
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
      </div>
    </ReportsStyle>
  );
}

const ReportsStyle = styled.div`
width: 95%;
gap: 1rem;
display: flex;
flex-direction: column;
.all-reports{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
`;
