import styled from 'styled-components';
import { Tabs } from 'antd';

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .forgot-password {
    color: ${({ theme: { colors } }) => colors.primary};
    align-self: flex-end;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-top: 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 0.8rem;

  .desc {
    font-family: 'Nunito Sans';
    text-align: center;
    font-size: 1.2rem;
    width: 60%;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
  }
`;

const TabsWrapper = styled(Tabs)`
  width: 100%;
  display: flex;
  align-items: center;
  .ant-tabs-tab {
    width: 100%;
    justify-content: center;
  }
  .ant-tabs-tab:hover{
    color: ${({ theme: { colors } }) => colors.primary};
  }
  .ant-tabs-content-holder {
    width: 50%;
  }
  .ant-tabs-tabpane {
    width: 100%;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    width: 99%;
    justify-content: center;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme: { colors } }) => colors.primary};
  }
  .ant-tabs-ink-bar {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    width: 50%;
  }

  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    .ant-tabs-content-holder {
      width: 70%;
    }
  }
`;

const TitleStyle = styled.div`
  position: relative;
  .scribbles {
    position: absolute;
    left: -4rem;
    top: -2.5rem;
    width: 6em;
  }
  .section-title {
    font-family: 'DM Serif Text';
    font-size: 2.2em;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    .scribbles {
      display: none;
    }
    .section-title {
      font-size: 1.8em;
    }
  }
`;

export {
  LoginDiv,
  RegisterDiv,
  Container,
  TitleWrapper,
  TabsWrapper,
  TitleStyle,
};
