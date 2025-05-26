import React from 'react';
import { Row, Col, Card, Typography, Image } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

const SectionContainer = styled.div`
  padding: 80px 0;
  background: white;

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

const StyledCard = styled(Card)`
  border: none;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .ant-card-body {
    padding: 24px;
  }

  .ant-card-cover {
    overflow: hidden;
  }

  .ant-card-cover img {
    transition: transform 0.3s;
  }

  &:hover .ant-card-cover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    margin-bottom: 30px;
    
    .ant-card-body {
      padding: 20px;
    }
  }
`;

const ProjectTitle = styled(Title)`
  margin-bottom: 8px !important;
  line-height: 1.4;

  /* 響應式字體大小 */
  &.ant-typography h4 {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 6px !important;
    
    &.ant-typography h4 {
      font-size: 1.2rem;
    }
  }
`;

const ProjectLocation = styled(Text)`
  color: #666;
  display: block;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 13px;
  }
`;

const ProjectDescription = styled(Text)`
  font-size: 15px;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
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
  }
`;

const ProjectsSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle level={2}>都市更新專案</SectionTitle>
        <StyledRow gutter={[24, 24]}>
          <StyledCol xs={24} sm={24} md={12}>
            <StyledCard
              cover={
                <StyledImage 
                  src="/projectInHome1.711722d8.jpg" 
                  alt="新北市五股區中興段777地號等更新事業計畫"
                  preview={false}
                />
              }
            >
              <ProjectTitle level={4}>新北市五股區中興段777地號</ProjectTitle>
              <ProjectLocation>
                (原更動捷運系統機廠)73-4地號等9筆(原5號)土地
              </ProjectLocation>
              <ProjectDescription>都市更新事業計畫審議會版</ProjectDescription>
            </StyledCard>
          </StyledCol>
          <StyledCol xs={24} sm={24} md={12}>
            <StyledCard
              cover={
                <StyledImage 
                  src="/projectInHome2.1a34b004.jpg" 
                  alt="擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫"
                  preview={false}
                />
              }
            >
              <ProjectTitle level={4}>擬訂新北市中和區健康段954地號等7筆土地</ProjectTitle>
              <ProjectLocation>新北市中和區</ProjectLocation>
              <ProjectDescription>都市更新事業計畫及都市設計審議案審議會</ProjectDescription>
            </StyledCard>
          </StyledCol>
        </StyledRow>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection; 