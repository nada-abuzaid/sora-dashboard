import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fbfbfb;
  .main-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    ${({ isOpen, theme: { sizes } }) => {
      return isOpen
        ? `margin-left: ${sizes.MENU_WIDTH}px;`
        : `
margin-left: ${sizes.COLLAPSED_MENU_WIDTH}px;
`;
    }}
    transition: all 0.5s ease;
  }
  .main-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 2rem;
    .chart :nth-child(3) {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .main-page {
      margin-left: 0px;
      p {
        text-align: center;
      }
    }
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-3.6rem);
  .main {
    width: 50%;
    display: flex;
  }

  @media only screen and (max-width: 991px) {
    .main {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    flex-direction: column-reverse;
    .main {
      width: 100%;
    }
  }
`;

export { DashboardWrapper, Main };
