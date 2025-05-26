import React from 'react';
import { Row, Col, Card, Typography, Image } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const SectionContainer = styled.div`
  padding: 80px 0;
  background: #f7f7f7;

  /* 平板響應式設計 */
  @media (max-width: 1024px) {
    padding: 60px 0;
  }

  /* 手機響應式設計 */
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 60px !important;

  /* 響應式字體大小 */
  &.ant-typography h2 {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px !important;
    
    &.ant-typography h2 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px !important;
    
    &.ant-typography h2 {
      font-size: 1.8rem;
    }
  }
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-bottom: 16px !important;

  /* 響應式字體大小 */
  &.ant-typography h3 {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px !important;
    
    &.ant-typography h3 {
      font-size: 1.3rem;
    }
  }
`;

const CardText = styled(Paragraph)`
  text-align: center;
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }

  .ant-card-body {
    padding: 24px;
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 15px;
    
    .ant-card-body {
      padding: 20px;
    }
  }
`;

const IconImage = styled(Image)`
  display: block;
  margin: 0 auto 24px;
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 768px) {
    margin: 0 -12px;
  }
`;

const StyledCol = styled(Col)`
  @media (max-width: 768px) {
    padding: 0 12px;
    margin-bottom: 24px;
  }
`;

const ServiceSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle level={2}>服務項目</SectionTitle>
        <StyledRow gutter={[24, 24]}>
          <StyledCol xs={24} sm={24} md={8}>
            <StyledCard>
              <IconImage
                src="/goIntroImg.3be36996.svg"
                alt="公司簡介"
                preview={false}
              />
              <CardTitle level={3}>公司簡介</CardTitle>
              <CardText>
                了解奇模有限公司的歷史、使命和價值觀，以及我們在都市更新領域的專業能力和成就。
              </CardText>
            </StyledCard>
          </StyledCol>
          <StyledCol xs={24} sm={24} md={8}>
            <StyledCard>
              <IconImage
                src="/goServiceImg.5b820b84.svg"
                alt="服務項目"
                preview={false}
              />
              <CardTitle level={3}>服務項目</CardTitle>
              <CardText>
                我們提供全方位的都市更新服務，包括規劃、設計、諮詢和執行，為客戶創造最大價值。
              </CardText>
            </StyledCard>
          </StyledCol>
          <StyledCol xs={24} sm={24} md={8}>
            <StyledCard>
              <IconImage
                src="/goProjectsImg.8d1d4167.svg"
                alt="案例實績"
                preview={false}
              />
              <CardTitle level={3}>案例實績</CardTitle>
              <CardText>
                瀏覽我們成功完成的都市更新案例，展示我們的專業能力和創新解決方案。
              </CardText>
            </StyledCard>
          </StyledCol>
        </StyledRow>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ServiceSection; 