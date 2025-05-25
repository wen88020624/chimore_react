import React from 'react';
import { Row, Col, Card, Typography, Image } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

const SectionContainer = styled.div`
  padding: 80px 0;
  background: white;
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

const StyledCard = styled(Card)`
  border: none;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled(Title)`
  margin-bottom: 8px !important;
`;

const ProjectLocation = styled(Text)`
  color: #666;
  display: block;
  margin-bottom: 16px;
`;

const ProjectsSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle level={2}>都市更新專案</SectionTitle>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <StyledCard
              cover={
                <Image 
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
              <Text>都市更新事業計畫審議會版</Text>
            </StyledCard>
          </Col>
          <Col xs={24} md={12}>
            <StyledCard
              cover={
                <Image 
                  src="/projectInHome2.1a34b004.jpg" 
                  alt="擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫"
                  preview={false}
                />
              }
            >
              <ProjectTitle level={4}>擬訂新北市中和區健康段954地號等7筆土地</ProjectTitle>
              <ProjectLocation>新北市中和區</ProjectLocation>
              <Text>都市更新事業計畫及都市設計審議案審議會</Text>
            </StyledCard>
          </Col>
        </Row>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection; 