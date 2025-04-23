import React from 'react';
import { Row, Col, Typography, Space, Image } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 60px 0 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MapContainer = styled.div`
  height: 250px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const IconContainer = styled.div`
  margin-right: 12px;
  font-size: 16px;
  padding-top: 2px;
`;

const ContactText = styled(Text)`
  font-size: 15px;
`;

const CopyrightContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #e8e8e8;
`;

const SocialLink = styled.a`
  color: #1677ff;
  margin-top: 16px;
  display: inline-block;
  
  &:hover {
    color: #4096ff;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Row gutter={[48, 32]}>
          <Col xs={24} md={12}>
            <Title level={4}>辦公室</Title>
            <Space direction="vertical" size="middle">
              <ContactItem>
                <IconContainer>
                  <EnvironmentOutlined />
                </IconContainer>
                <ContactText>
                  地址：104台北市中山區松泰路1段34號
                </ContactText>
              </ContactItem>
              <ContactItem>
                <IconContainer>
                  <PhoneOutlined />
                </IconContainer>
                <ContactText>
                  電話：(02)8772-3969
                </ContactText>
              </ContactItem>
              <ContactItem>
                <IconContainer>
                  <MailOutlined />
                </IconContainer>
                <ContactText>
                  信箱：more2821@gmail.com
                </ContactText>
              </ContactItem>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/facebook.fd87dfc7.svg" 
                  alt="Facebook"
                  width={24}
                  preview={false}
                />
              </SocialLink>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4}>地圖</Title>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.495928553928!2d121.5267!3d25.0477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzUxLjciTiAxMjHCsDMxJzM2LjEiRQ!5e0!3m2!1szh-TW!2stw!4v1654861234567!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </MapContainer>
          </Col>
        </Row>
        <CopyrightContainer>
          <Text>&copy; {new Date().getFullYear()} 奇模有限公司. All rights reserved.</Text>
        </CopyrightContainer>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer; 