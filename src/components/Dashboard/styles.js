import { AutoComplete, Table } from 'antd';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 4px #b5b5b5;
  background-color: white;
  z-index: 11;
  .menu-icon {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: normal;
    cursor: pointer;
  }
  ${({ dashboard }) => (dashboard === 'admin'
    ? `
  height: 4rem;
  `
    : 'height: 3.4rem;')}
`;

const AutoCompleteStyle = styled(AutoComplete)`
  width: 100%;
  .ant-select-selector {
    height: 2.5rem !important;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    .ant-select-selector:focus{
      border-color: ${({ theme: { colors } }) => colors.primary};
    }
    span {
      display: flex;
      align-items: center;
      input {
        height: 100% !important;
      }
    }
  }
`;

const AutoCompleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 11;
  top: 0.7rem;
  width: 40%;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.white};
  .icon {
    background-color: ${({ theme: { colors } }) => colors.primary};
    height: 2.5rem;
    border-radius: 0 5px 5px 0;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ASide = styled.div`
  box-shadow: 0px 2px 4px 2px #b5b5b5;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid rgba(82, 82, 82, 0.4);
  overflow: hidden;
  transition: all 0.5s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ isOpen, theme: { sizes } }) => (isOpen
    ? `width: ${sizes.MENU_WIDTH}px;`
    : `
    width: ${sizes.COLLAPSED_MENU_WIDTH}px;
    `)}
  .side-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .side-logo {
    display: flex;
    padding: 1.2rem;
    align-items: center;
    justify-content: space-between;
    background: none;
    .close-btn {
      opacity: 0;
      background: none;
      border: none;
      outline: none;
      @media only screen and (max-width: 600px) {
        opacity: 1;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      .sora {
        text-transform: uppercase;
            font-family: "Nunito Sans", sans-serif;

        font-weight: bold;
        color: ${({ theme: { colors } }) => colors.primary};
        font-size: 1.3rem;
        margin-left: 0.5rem;
        ${(props) => (props.isOpen ? null : 'display:none')}
      }
    }
  }
  .side-menu {
    display: flex;
    flex-direction: column;
  }
  .side-menu-item {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.primaryDark};
    p,
    button {
          font-family: "Nunito Sans", sans-serif;

      font-size: 1rem;
      margin-left: 0.7rem;
      padding: 1.2rem 0;
      ${(props) => (props.isOpen ? null : 'display:none')}
    }
    button {
      background-color: ${({ theme: { colors } }) => colors.white};
      border: none;
      outline: none;
      cursor: pointer;
    }
    .icon {
      margin-left: 1.3rem;
      width: 1.5rem;
      ${(props) => (props.isOpen ? null : 'margin: 1.4rem')}
    }
  }
  .active {
    font-weight: bold;
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  .footer {
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.7rem;
          font-family: "Nunito Sans", sans-serif;

      margin-left: 0.6rem;
      ${(props) => (props.isOpen ? null : 'display: none')}
    }
    span {
      height: 100%;
      padding: 0 0.5rem;
      border-radius: 0.5rem 0 0 0;
      background-color: ${({ theme: { colors } }) => colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      ${(props) => (props.isOpen
    ? 'border-radius: 0.5rem 0 0 0'
    : 'border-radius: 0; width: 100%;')}
    }
  }
  .upgrade {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    z-index: 100;
    width: 80%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.white};
    ${(props) => (props.isOpen ? null : 'display: none')}
  }
`;

const Background = styled.div`
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    z-index: 90;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    ${(props) => (props.isOpen ? null : 'display: none')}
  }
`;

const SlideWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    gap:  0;
  }
  @media only screen and (max-width: 400px) {
    height: 95%;
  }
`;

const SlideTitle = styled.p`
  font-family: "DM Serif Text";
  font-size: 1.5rem;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    font-size: 1.2rem;
  }
`;

const SlideParagraph = styled.p`
  text-align: justify;
      font-family: "Nunito Sans", sans-serif;

  margin-bottom: 50px;
  font-size: 1rem;
`;

const StyledCloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
`;

const ImagesWrapper = styled.div`
  position: relative;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30%;
  }
  .popup2 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32%;
    transform: translate(-45%, -65%);
  }
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    img{
      width: 50%;
    }
  }
`;

const StyledTable = styled(Table)`
padding: 0 40px;

thead > tr > th {
  background-color: #89aaad33;
}

.ant-table-header {
  border-radius: 20px 20px 0 0;
  table{
    width: auto;
  }
}

.ant-table-container {
  border-radius: 20px 20px 0 0;
  box-shadow: inset 0px -4px 12px rgba(0, 0, 0, 0.1);
  width: 95%;
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

.ant-table-tbody > tr > td{
  width: 10rem;
}

@media screen and (max-width: 1200px) {
  padding: 0;
  background-color: red;
  thead > tr{
  display: flex;
  th {
  display: inline-block;
  width: 10rem;
}
}
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

export {
  Nav,
  ASide,
  Background,
  SlideWrapper,
  SlideTitle,
  StyledCloseButton,
  SlideParagraph,
  ImagesWrapper,
  AutoCompleteStyle,
  AutoCompleteContainer,
  TableContent,
  StyledTable,
  TableTitle,
};
