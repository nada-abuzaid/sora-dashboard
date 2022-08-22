import { Tabs } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';
import { useNavigate } from 'react-router-dom';
import FormAuth from './Form';
import { TabsWrapper } from './styles';

const { TabPane } = Tabs;

export default function AuthTabs() {
  const navigate = useNavigate();

  const onChange = (key) => {
    navigate(`/auth?${key}`);
  };

  return (
    <TabsWrapper defaultActiveKey="login" onChange={onChange}>
      <TabPane tab="Register" key="register">
        <FormAuth />
      </TabPane>
      <TabPane tab="Login" key="login">
        <FormAuth />
      </TabPane>
    </TabsWrapper>
  );
}
