import React from 'react';
import {
  Layout, Icon, Avatar, Menu, Dropdown,
} from 'antd';
import './index.css';

const { Header } = Layout;
const { Item } = Menu;

const userMenu = (
  <Menu>
    <Item>个人中心</Item>
    <Item>退出登录</Item>
  </Menu>
);

const AppHeader = () => (
  <Header className="app-header" style={{ backgroundColor: '#fff', padding: 0 }}>
    <div className="menu-toggle-btn">
      <Icon type="menu-fold" />
    </div>
    <div className="app-header__right">
      <Dropdown overlay={userMenu}>
        <div className="app-header__user">
          <Avatar size="small" icon="user" />
          <div className="app-header__user-text">用户名</div>
        </div>
      </Dropdown>
    </div>
  </Header>
);

export default AppHeader;
