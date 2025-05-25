import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhTW from 'antd/lib/locale/zh_TW';
import AppRouter from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhTW}>
      <AppRouter />
    </ConfigProvider>
  </React.StrictMode>,
);
