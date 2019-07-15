import React from 'react';
import { Layout } from 'antd';
import Header from '../AppHeader';
import Footer from '../AppFooter';
import Sider from '../AppSider';

import './index.css';

const { Content } = Layout;

function AppLayout() {
  return (
    <Layout className="app-container">
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
