import { Tabs } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import FormAuth from './Form';
import { navigate } from 'gatsby';

const { TabPane } = Tabs;

export default function AuthTabs() {
  const onChange = (key) => {
    console.log(key, 'ffffff');
    navigate(`?${key}`);
  };

  return (
    <TabsWrapper defaultActiveKey='register' onChange={onChange}>
      <TabPane tab='Register' key='register'>
        <FormAuth />
      </TabPane>
      <TabPane tab='Login' key='login'>
        <FormAuth />
      </TabPane>
    </TabsWrapper>
  );
}

const TabsWrapper = styled(Tabs)`
  width: 100%;
  display: flex;
  align-items: center;
  .ant-tabs-tab {
    width: 100%;
    justify-content: center;
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
