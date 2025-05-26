import React, { useState } from 'react';
import { Layout, Menu, Typography, Image, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  // {
  //   key: 'news',
  //   label: <Link to="/news">最新消息</Link>,
  // },
  {
    key: 'contact',
    label: <Link to="/contact">聯絡我們</Link>,
  },
];

const StyledHeader = styled(AntHeader)`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: 64px;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 56px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const StyledImage = styled(Image)`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 8px;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0 !important;
  margin-right: 20px !important;
  white-space: nowrap;

  &.ant-typography h4 {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    margin-right: 16px !important;
    
    &.ant-typography h4 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0 !important;
    
    &.ant-typography h4 {
      font-size: 1rem;
    }
  }
`;

const DesktopMenu = styled(Menu)`
  flex: 1;
  min-width: 0;
  justify-content: flex-end;
  border-bottom: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  border: none;
  box-shadow: none;
  padding: 0;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(Menu)`
  border-right: none;
  
  .ant-menu-item {
    margin: 0;
    padding: 16px 24px;
    height: auto;
    line-height: 1.5;
  }

  .ant-menu-item a {
    font-size: 16px;
    color: #333;
  }
`;

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = () => {
    setDrawerVisible(false);
  };

  return (
    <StyledHeader>
      <LogoContainer>
        <StyledImage
          src="/chimore.9206c9a4.png"
          alt="奇模有限公司"
          preview={false}
          width={30}
        />
        <StyledTitle level={4}>
          奇模有限公司
        </StyledTitle>
      </LogoContainer>
      
      <DesktopMenu 
        mode="horizontal" 
        items={items}
      />
      
      <MobileMenuButton 
        type="text" 
        icon={<MenuOutlined />} 
        onClick={showDrawer}
      />
      
      <Drawer
        title="選單"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        width={280}
        styles={{
          body: { padding: 0 }
        }}
      >
        <MobileMenu
          mode="vertical"
          items={items}
          onClick={handleMenuClick}
        />
      </Drawer>
    </StyledHeader>
  );
};

export default Header; 