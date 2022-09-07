import styled from 'styled-components';

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .download-btn {
    background-color: ${({ theme: { colors } }) => colors.secondaryGreen};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;
    outline: none;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }

  .ant-select{
    font-size: 1rem;
  }
  
  .ant-select-focused .ant-select-selector,
  .ant-select-selector:hover {
    border-color: ${({ theme: { colors } }) => colors.primary} !important;
    box-shadow: none !important;
  }

  .ant-select-focused:not(.ant-select-disabled)
    .ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: red !important;
  }

  .ant-select-focused .ant-select-arrow {
    color: ${({ theme: { colors } }) => colors.primary} !important;
  }

  .ant-select.ant-select-single.ant-select-show-arrow {
    height: 2.5rem !important;
    .ant-select-arrow {
      color: black;
    }
    div {
      height: 2.5rem;
      display: flex;
      align-items: center;
      width: 8rem;
      .ant-select-selection-search,
      .ant-select-selection-item {
        height: 2.5rem;
        border: red;
        display: flex;
        align-items: center;
        align-content: center;
      }
    }
  }
`;

const ReportStyle = styled.div`
  display: flex;
  background: #ffffff;
  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  justify-content: space-between;
  border-radius: 6px;
  padding: 1.5rem;
  img{
    cursor: pointer;
  }
  p {
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-size: 1.125rem;
    :first-child {
      font-weight: 700;
    }
    :last-child {
      font-weight: 600;
    }
  }
`;

export { TableHeader, ReportStyle };
