import React from 'react';
import { Layout, Menu } from 'antd';

import './index.css';

const { Sider } = Layout;
const { Item } = Menu;

const AppSider = () => (
  <Sider>
    <div className="app-sider__logo">驾校管理系统</div>
    <Menu mode="inline" theme="dark">
      <Item>首页</Item>
      <Item>学员管理</Item>
      <Item>用户中心</Item>
    </Menu>
  </Sider>
);

export default AppSider;
