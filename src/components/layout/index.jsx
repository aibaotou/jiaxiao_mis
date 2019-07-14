import React from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

function LayoutCondainer() {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutCondainer;
