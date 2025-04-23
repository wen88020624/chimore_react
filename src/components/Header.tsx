import React from 'react';
import { Layout, Menu, Typography, Image } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const items: MenuProps['items'] = [
  {
    key: 'home',
    label: <Link to="/">首頁</Link>,
  },
  {
    key: 'about',
    label: <Link to="/about">公司簡介</Link>,
  },
  {
    key: 'projects',
    label: <Link to="/projects">服務項目</Link>,
  },
  {
    key: 'news',
    label: <Link to="/news">最新消息</Link>,
  },
  {
    key: 'contact',
    label: <Link to="/contact">聯絡我們</Link>,
  },
];

const Header: React.FC = () => {
  return (
    <AntHeader style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1, 
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="site-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/chimore.9206c9a4.png"
          alt="奇模有限公司"
          preview={false}
          width={30}
          style={{ marginRight: '10px' }}
        />
        <Title level={4} style={{ margin: 0, marginRight: '20px' }}>
          奇模有限公司
        </Title>
      </div>
      <Menu 
        mode="horizontal" 
        items={items} 
        style={{ 
          flex: 1, 
          minWidth: 0,
          justifyContent: 'flex-end'
        }} 
      />
    </AntHeader>
  );
};

export default Header; 