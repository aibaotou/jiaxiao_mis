import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Header from '../AppHeader';
import Footer from '../AppFooter';
import Sider from '../AppSider';

import './index.css';

const { Content } = Layout;

const AppLayout = (props) => {
  const { children } = props;
  return (
    <Layout className="app-container">
      <Sider />
      <Layout>
        <Header />
        <Content className="app-content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
