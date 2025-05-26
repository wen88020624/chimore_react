import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const HeroContainer = styled.div`
  height: 80vh;
  min-height: 500px;
  width: 100%;
  background-image: url('/homeBanner.97b81e2a.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  /* 平板響應式設計 */
  @media (max-width: 1024px) {
    padding-left: 8%;
    height: 70vh;
    min-height: 450px;
  }

  /* 手機響應式設計 */
  @media (max-width: 768px) {
    padding: 0 5%;
    height: 60vh;
    min-height: 400px;
    align-items: center;
    text-align: center;
    background-attachment: scroll; /* 移動端取消固定背景 */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledTitle = styled(Title)`
  color: white !important;
  margin-bottom: 8px !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  /* 桌面版字體大小 */
  &.ant-typography h1 {
    font-size: 3.5rem;
    line-height: 1.2;
  }

  &.ant-typography h2 {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  /* 平板響應式字體 */
  @media (max-width: 1024px) {
    &.ant-typography h1 {
      font-size: 3rem;
    }

    &.ant-typography h2 {
      font-size: 2.2rem;
    }
  }

  /* 手機響應式字體 */
  @media (max-width: 768px) {
    &.ant-typography h1 {
      font-size: 2.5rem;
    }

    &.ant-typography h2 {
      font-size: 1.8rem;
    }
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <StyledTitle level={1}>奇模</StyledTitle>
        <StyledTitle level={2}>專業都更</StyledTitle>
        <StyledTitle level={2}>展望未來</StyledTitle>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection; 