import { Tabs } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import FormAuth from './Form';
import { navigate } from 'gatsby';
import { TabsWrapper } from './styles';

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
