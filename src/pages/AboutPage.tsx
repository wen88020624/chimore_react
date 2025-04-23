import React from 'react';
import { Typography, Space, Row, Col, Card, Image } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const PageContainer = styled.div`
  padding: 60px 0;
  background-color: #f8f9fa;
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
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const CEOSection = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const CEOImage = styled(Image)`
  border-radius: 50%;
  margin-bottom: 20px;
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <div style={{ 
        height: '300px', 
        background: `url('/introBgImg.c4652fd1.jpg') center/cover no-repeat`,
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
        <Title level={1} style={{ color: 'white', zIndex: 2, margin: 0 }}>認識奇模</Title>
      </div>
      
      <PageContainer>
        <ContentWrapper>
          <PageTitle level={2}>關於奇模有限公司</PageTitle>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Paragraph style={{ fontSize: 16, textAlign: 'center' }}>
              奇模有限公司成立於2006年，是一家專注於都市更新與都市發展的專業公司。
              我們擁有經驗豐富的團隊，致力於為客戶提供全方位的都市更新服務。
            </Paragraph>
            
            <CEOSection>
              <CEOImage 
                src="/introCEO.ea01bcda.jpg" 
                alt="總經理王碩模" 
                width={200}
                preview={false}
              />
              <Title level={4}>總經理王碩模</Title>
              <Paragraph>
                臺北市都市計畫委員會專業委員<br />
                中國文化大學市計畫與開發管理學系兼任講師<br />
                社團法人臺北市都市更新會委員會委員(法製專業講師)<br />
                新北市都市更新學會委員(法制專業講師)<br />
                九十一年高等考試都市計畫師<br />
                國立政治大學都市計畫研究所碩士
              </Paragraph>
            </CEOSection>
            
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <StyledCard title="使命">
                  <Paragraph>
                    我們的使命是協助客戶實現最優質的都市更新項目，促進城市永續發展，
                    創造更好的居住環境。
                  </Paragraph>
                </StyledCard>
              </Col>
              <Col xs={24} md={8}>
                <StyledCard title="願景">
                  <Paragraph>
                    成為台灣都市更新領域的領導者，以創新思維和專業技術，
                    推動城市更新與發展。
                  </Paragraph>
                </StyledCard>
              </Col>
              <Col xs={24} md={8}>
                <StyledCard title="價值觀">
                  <Paragraph>
                    專業、誠信、創新、永續是我們的核心價值觀，
                    我們相信只有堅持這些價值才能提供最優質的服務。
                  </Paragraph>
                </StyledCard>
              </Col>
            </Row>
          </Space>
        </ContentWrapper>
      </PageContainer>
      
      <div style={{
        padding: '60px 0',
        background: '#fff'
      }}>
        <ContentWrapper>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>專業團隊</Title>
          <Row gutter={[16, 16]}>
            {[...Array(9)].map((_, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card bordered={false}>
                  <Image 
                    src="/workspaceEnv.4621f618.jpg" 
                    alt={`團隊照片 ${index + 1}`}
                    preview={false}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </ContentWrapper>
      </div>
      
      <div style={{
        padding: '60px 0',
        background: '#f0f2f5'
      }}>
        <ContentWrapper>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>公司環境</Title>
          <Row gutter={[16, 16]}>
            {[...Array(9)].map((_, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card bordered={false}>
                  <Image 
                    src="/workspaceEnv.4621f618.jpg" 
                    alt={`環境照片 ${index + 1}`}
                    preview={false}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </ContentWrapper>
      </div>
    </>
  );
};

export default AboutPage;
