import React from 'react';
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import Home from './views/home';

moment.locale('zh-cn');

function App() {
  return (
    <LocaleProvider locale={zhCN}>
      <Home />
    </LocaleProvider>
  );
}

export default App;
