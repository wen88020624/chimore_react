import React from 'react';
import { Row, Col, Card, Typography, Image } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const SectionContainer = styled.div`
  padding: 80px 0;
  background: #f7f7f7;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 60px !important;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-bottom: 16px !important;
`;

const CardText = styled(Paragraph)`
  text-align: center;
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconImage = styled(Image)`
  display: block;
  margin: 0 auto 24px;
  width: 80px;
  height: 80px;
`;

const ServiceSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle level={2}>服務項目</SectionTitle>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
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
          </Col>
          <Col xs={24} md={8}>
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
          </Col>
          <Col xs={24} md={8}>
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
          </Col>
        </Row>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ServiceSection; 