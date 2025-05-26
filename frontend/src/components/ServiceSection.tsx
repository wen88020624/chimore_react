import React from 'react';
import { Row, Col, Card, Typography, Image, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const SectionContainer = styled.div`
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }

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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const SectionTitle = styled(Title)`
  margin-bottom: 20px !important;
  color: #2c3e50;
  position: relative;

  /* 響應式字體大小 */
  &.ant-typography h2 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2ecc71, #e74c3c);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    &.ant-typography h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    &.ant-typography h2 {
      font-size: 2rem;
    }
  }
`;

const SectionSubtitle = styled(Paragraph)`
  font-size: 18px;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled(Title)`
  margin-bottom: 12px !important;
  color: #34495e;

  /* 響應式字體大小 */
  &.ant-typography h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    margin-bottom: 8px !important;
    
    &.ant-typography h3 {
      font-size: 1.3rem;
    }
  }
`;

const CardText = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.7;
  color: #7f8c8d;
  margin-bottom: 24px !important;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px !important;
    text-align: center;
  }
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => props.color || 'linear-gradient(90deg, #3498db, #2ecc71, #e74c3c)'};
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
  }

  .ant-card-body {
    padding: 40px 32px;
    height: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    
    .ant-card-body {
      padding: 32px 24px;
    }
  }
`;

const IconImage = styled(Image)`
  width: 80px;
  height: 80px;
  transition: all 0.4s ease;
  flex-shrink: 0;

  ${StyledCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const ActionButton = styled(Button)`
  border-radius: 30px;
  height: 50px;
  padding: 0 28px;
  font-weight: 600;
  font-size: 15px;
  border: 2px solid;
  background: transparent;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: flex-start;

  &.company-btn {
    border-color: #3498db;
    color: #3498db;
    
    &:hover {
      background: #3498db;
      color: white;
      transform: translateX(6px);
      border-color: #3498db;
    }
  }

  &.service-btn {
    border-color: #2ecc71;
    color: #2ecc71;
    
    &:hover {
      background: #2ecc71;
      color: white;
      transform: translateX(6px);
      border-color: #2ecc71;
    }
  }

  &.project-btn {
    border-color: #e74c3c;
    color: #e74c3c;
    
    &:hover {
      background: #e74c3c;
      color: white;
      transform: translateX(6px);
      border-color: #e74c3c;
    }
  }

  .anticon {
    transition: transform 0.3s ease;
  }

  &:hover .anticon {
    transform: translateX(6px);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 24px;
    font-size: 14px;
    align-self: center;
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
    margin-bottom: 32px;
  }
`;

const ServiceSection: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "/company-icon.svg",
      title: "公司簡介",
      description: "了解奇模有限公司的歷史、使命和價值觀，以及我們在都市更新領域的專業能力和成就。我們致力於為客戶提供最專業的服務。",
      path: "/about",
      buttonText: "了解更多",
      buttonClass: "company-btn",
      cardColor: "#3498db"
    },
    {
      icon: "/services-icon.svg",
      title: "服務項目",
      description: "我們提供全方位的都市更新服務，包括規劃、設計、諮詢和執行，為客戶創造最大價值。專業團隊確保每個項目的成功。",
      path: "/about",
      buttonText: "查看服務",
      buttonClass: "service-btn",
      cardColor: "#2ecc71"
    },
    {
      icon: "/projects-icon.svg",
      title: "案例實績",
      description: "瀏覽我們成功完成的都市更新案例，展示我們的專業能力和創新解決方案。每個案例都代表著我們的專業承諾。",
      path: "/projects",
      buttonText: "查看案例",
      buttonClass: "project-btn",
      cardColor: "#e74c3c"
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <HeaderSection>
          <SectionTitle level={2}>服務項目</SectionTitle>
          <SectionSubtitle>
            我們提供專業的都市更新服務，從規劃到執行，為您的項目創造最大價值
          </SectionSubtitle>
        </HeaderSection>
        
        <StyledRow gutter={[40, 40]}>
          {services.map((service, index) => (
            <StyledCol key={index} xs={24} sm={24} lg={8}>
              <StyledCard 
                onClick={() => handleCardClick(service.path)}
                color={service.cardColor}
              >
                <CardContainer>
                  <CardHeader>
                    <IconImage
                      src={service.icon}
                      alt={service.title}
                      preview={false}
                    />
                    <CardContent>
                      <CardTitle level={3}>{service.title}</CardTitle>
                    </CardContent>
                  </CardHeader>
                  
                  <CardText>
                    {service.description}
                  </CardText>
                  
                  <ActionButton 
                    type="default"
                    className={service.buttonClass}
                    icon={<ArrowRightOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(service.path);
                    }}
                  >
                    {service.buttonText}
                  </ActionButton>
                </CardContainer>
              </StyledCard>
            </StyledCol>
          ))}
        </StyledRow>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ServiceSection; 