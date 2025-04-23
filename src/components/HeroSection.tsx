import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const HeroContainer = styled.div`
  height: 80vh;
  width: 100%;
  background-image: url('/homeBanner.97b81e2a.jpg');
  background-size: cover;
  background-position: center;
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
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const StyledTitle = styled(Title)`
  color: white !important;
  margin-bottom: 8px !important;
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