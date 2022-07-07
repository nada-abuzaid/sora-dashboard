import { Tabs } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styled from 'styled-components';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function AuthTabs() {
  return (
    <TabsWrapper defaultActiveKey='1' onChange={onChange}>
      <TabPane tab='Register' key='1'>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab='Login' key='2'>
        Content of Tab Pane 2
      </TabPane>
    </TabsWrapper>
  );
}

const TabsWrapper = styled(Tabs)`
  .ant-tabs-tab {
    width: 50%;
    justify-content: center;
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
`;
