import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const AboutContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  background-image: url('/introBanner.a9a0b4d4.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  /* 平板響應式設計 */
  @media (max-width: 1024px) {
    min-height: 60vh;
    padding: 60px 0;
  }

  /* 手機響應式設計 */
  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 40px 0;
    background-attachment: scroll; /* 移動端取消固定背景 */
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 30px 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const StyledTitle = styled(Title)`
  color: white !important;
  margin-bottom: 24px !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  /* 響應式字體大小 */
  &.ant-typography h2 {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    &.ant-typography h2 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px !important;
    
    &.ant-typography h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 16px !important;
    
    &.ant-typography h2 {
      font-size: 1.5rem;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: white !important;
  font-size: 18px !important;
  line-height: 1.8 !important;
  margin-bottom: 20px !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

  /* 響應式字體大小 */
  @media (max-width: 1024px) {
    font-size: 17px !important;
    line-height: 1.7 !important;
  }

  @media (max-width: 768px) {
    font-size: 16px !important;
    line-height: 1.6 !important;
    margin-bottom: 16px !important;
  }
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <StyledTitle level={2}>奇模簡介</StyledTitle>
        <StyledParagraph>
          奇模成立於2006年，主要業務項目包括都市更新、都市計畫、都市設計及不動產開發等。
        </StyledParagraph>
        <StyledParagraph>
          研究、設計及諮詢等項目。我們擁有一群專業的顧問團隊，自前期規劃到整合推動，協助客戶達到最理想的開發效益。
        </StyledParagraph>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection; 