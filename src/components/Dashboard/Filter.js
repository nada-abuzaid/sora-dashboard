import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';

export default function Filter() {
  const { Option } = Select;
  const [filter, setFilter] = React.useState('Last 30 Days');

  const handleSort = ({ value }) => {
    setFilter(value);
  };

  return (
    <FilterSection>
      <div className="name">
        <p>Benefex - Sora Usage</p>
        <span>{filter}</span>
      </div>
      <Select
        labelInValue
        defaultValue={{
          value: '',
          label: 'Filter time period',
        }}
        onChange={handleSort}
      >
        <Option value="Last 30 Days">Last 30 Days</Option>
        <Option value="Last 90 Days">Last 90 Days</Option>
        <Option value="July, 2022">July, 2022</Option>
        <Option value="June, 2022">June, 2022</Option>
        <Option value="May, 2022">May, 2022</Option>
      </Select>
    </FilterSection>
  );
}

const FilterSection = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: "DM Serif Text", sans-serif;
.ant-select-focused .ant-select-selector{
  background-color: ${({ theme: { colors } }) => colors.secondaryGreen};
  color: ${({ theme: { colors } }) => colors.white};
}
  .ant-select{
    width: 13%;
  }
  p{
    font-size: 1.75rem;  
  }
  span{
    font-family: "Nunito", sans-serif;
    font-size: 1.125rem;
  }
`;
