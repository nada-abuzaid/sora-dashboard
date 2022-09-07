import styled from 'styled-components';

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

const Icon = styled.button`
  font-size: 1.3rem;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  position: relative;
  ::after {
    content: "";
    height: 70%;
    width: 1px;
    left: 35px;
    position: absolute;
    background-color: #d8d8d8;
  }
  :last-child {
    ::after {
      display: none;
    }
  }
`;

export { ActionsWrapper, Icon };
