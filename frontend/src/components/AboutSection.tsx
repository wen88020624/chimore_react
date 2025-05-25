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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
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
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  color: white !important;
  margin-bottom: 24px !important;
`;

const StyledParagraph = styled(Paragraph)`
  color: white !important;
  font-size: 16px !important;
  line-height: 1.6 !important;
  margin-bottom: 16px !important;
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