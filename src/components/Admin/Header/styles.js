import styled from 'styled-components';

const AdminTableHeader = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 90%;
.addEmployer-btn {
  background-color: ${({ theme: { colors } }) => colors.secondaryGreen};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.ant-select-focused .ant-select-selector, .ant-select-selector:hover{
  border-color: ${({ theme: { colors } }) => colors.primary} !important;
  box-shadow: none !important;
}

.ant-select-focused:not(.ant-select-disabled) .ant-select:not(.ant-select-customize-input) .ant-select-selector{
  border-color: red !important;
}

.ant-select-focused .ant-select-arrow{
  color: ${({ theme: { colors } }) => colors.primary} !important;
}

.ant-select.ant-select-single.ant-select-show-arrow {
  height: 2.5rem !important;
  .ant-select-arrow{
    color: black;
  }
  div {
    height: 2.5rem;
    display: flex;
    align-items: center;
    width: 7rem;
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

export default AdminTableHeader;
