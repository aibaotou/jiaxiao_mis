import React from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            Content
            {count}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
