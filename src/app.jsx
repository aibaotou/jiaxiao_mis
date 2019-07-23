import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { createStore } from 'redux';
// import todoApp from './reducers';

// const store = createStore(todoApp);
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Home from './views/home';
import Login from './views/login';
import 'normalize.css';
import './app.css';

moment.locale('zh-cn');

function App() {
  return (
    <LocaleProvider locale={zhCN}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </LocaleProvider>
  );
}

export default App;
