import React from 'react';
import { Typography, Row, Col, Card, Divider, Image } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;

const PageContainer = styled.div`
  padding: 60px 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px !important;
`;

const StyledCard = styled(Card)`
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ProjectTitle = styled(Title)`
  margin-bottom: 8px !important;
`;

const ProjectLocation = styled(Text)`
  color: #666;
  display: block;
  margin-bottom: 16px;
`;

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div style={{ 
        height: '300px', 
        background: `url('/projectsBanner.6a1d79a3.jpg') center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}></div>
        <Title level={1} style={{ color: 'white', zIndex: 2, margin: 0 }}>實例佳績</Title>
      </div>
      
      <PageContainer>
        <ContentWrapper>
          <PageTitle level={2}>都市更新專案</PageTitle>
          <Paragraph style={{ fontSize: 16, textAlign: 'center', marginBottom: 40 }}>
            我們的專業團隊致力於打造高品質的都市更新專案，以下是我們部分的代表作品。
          </Paragraph>
          
          <Row gutter={[24, 24]}>
            <Col xs={24}>
              <StyledCard>
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={10}>
                    <Image 
                      src="/projectInHome1.711722d8.jpg" 
                      alt="新北市五股區中興段777地號等更新事業計畫"
                      preview={false}
                    />
                  </Col>
                  <Col xs={24} md={14}>
                    <ProjectTitle level={3}>新北市五股區中興段777地號</ProjectTitle>
                    <ProjectLocation>
                      (原更動捷運系統機廠)73-4地號等9筆(原5號)土地
                    </ProjectLocation>
                    <Paragraph>
                      本案位於新北市五股區中興段，土地面積約為X平方公尺，建築規劃為地上X層、地下X層的集合住宅，
                      提供約X戶的優質住宅單位。專案特色包括完善的公共設施、綠化空間及智能家居設計。
                    </Paragraph>
                    <Paragraph>
                      <Text strong>都市更新事業計畫審議會版</Text>
                    </Paragraph>
                  </Col>
                </Row>
              </StyledCard>
            </Col>
            
            <Col xs={24}>
              <StyledCard>
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={10}>
                    <Image 
                      src="/projectInHome2.1a34b004.jpg" 
                      alt="擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫"
                      preview={false}
                    />
                  </Col>
                  <Col xs={24} md={14}>
                    <ProjectTitle level={3}>擬訂新北市中和區健康段954地號等7筆土地</ProjectTitle>
                    <ProjectLocation>新北市中和區</ProjectLocation>
                    <Paragraph>
                      本案位於新北市中和區健康段，土地面積約為X平方公尺，規劃為地上X層、地下X層的複合式建築，
                      包含住宅單位與商業空間。專案亮點為便利的交通位置、現代化設施及舒適的生活環境。
                    </Paragraph>
                    <Paragraph>
                      <Text strong>都市更新事業計畫及都市設計審議案審議會</Text>
                    </Paragraph>
                  </Col>
                </Row>
              </StyledCard>
            </Col>
          </Row>
          
          <Divider />
          
          <Title level={3} style={{ textAlign: 'center', margin: '40px 0 30px' }}>更多項目</Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                cover={
                  <Image 
                    src="/serviceImg.eb32ecf0.jpg" 
                    alt="台北市某區都更案"
                    preview={false}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                }
              >
                <Card.Meta title="台北市某區都更案" description="住商混合開發項目" />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                cover={
                  <Image 
                    src="/serviceImg.eb32ecf0.jpg" 
                    alt="新北市某區都更案"
                    preview={false}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                }
              >
                <Card.Meta title="新北市某區都更案" description="住宅開發項目" />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                cover={
                  <Image 
                    src="/serviceImg.eb32ecf0.jpg" 
                    alt="桃園市某區都更案"
                    preview={false}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                }
              >
                <Card.Meta title="桃園市某區都更案" description="商業區開發項目" />
              </Card>
            </Col>
          </Row>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default ProjectsPage; 