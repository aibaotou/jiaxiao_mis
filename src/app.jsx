import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore } from 'redux';
// import todoApp from './reducers';

// const store = createStore(todoApp);
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Student from './views/student';
import 'normalize.css';
import './app.css';

moment.locale('zh-cn');

function App() {
  return (
    <LocaleProvider locale={zhCN}>
      <Router>
        <Student />
      </Router>
    </LocaleProvider>
  );
}

export default App;
