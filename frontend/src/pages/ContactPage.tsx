import React from 'react';
import { Typography, Row, Col, Form, Input, Button, Space } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

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

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  margin-right: 16px;
  font-size: 18px;
  color: #1677ff;
  padding-top: 2px;
`;

const MapContainer = styled.div`
  height: 350px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
`;

const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('接收到的表單值：', values);
    // 這裡可以添加發送表單資料到後端的邏輯
    form.resetFields();
  };

  return (
    <>
      <div style={{ 
        height: '300px', 
        background: `url('/contactUsBanner.ffbbcdca.jpg') center/cover no-repeat`,
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
        <Title level={1} style={{ color: 'white', zIndex: 2, margin: 0 }}>聯絡我們</Title>
      </div>
      
      <PageContainer>
        <ContentWrapper>
          <PageTitle level={2}>聯絡奇模有限公司</PageTitle>
          <Paragraph style={{ fontSize: 16, textAlign: 'center', marginBottom: 40 }}>
            如有任何疑問或需求，歡迎透過以下方式與我們聯繫。
          </Paragraph>
          
          <Row gutter={[48, 32]}>
            <Col xs={24} lg={12}>
              <Title level={4}>聯絡資訊</Title>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <ContactItem>
                  <IconContainer>
                    <EnvironmentOutlined />
                  </IconContainer>
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: 4 }}>地址</Text>
                    <Text>104台北市中山區松泰路1段34號</Text>
                  </div>
                </ContactItem>
                
                <ContactItem>
                  <IconContainer>
                    <PhoneOutlined />
                  </IconContainer>
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: 4 }}>電話</Text>
                    <Text>(02)8772-3969</Text>
                  </div>
                </ContactItem>
                
                <ContactItem>
                  <IconContainer>
                    <MailOutlined />
                  </IconContainer>
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: 4 }}>信箱</Text>
                    <Text>more2821@gmail.com</Text>
                  </div>
                </ContactItem>
              </Space>
              
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
            
            <Col xs={24} lg={12}>
              <Title level={4}>聯絡表單</Title>
              <StyledForm
                form={form}
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  label="姓名"
                  rules={[{ required: true, message: '請輸入您的姓名' }]}
                >
                  <Input placeholder="請輸入您的姓名" />
                </Form.Item>
                
                <Form.Item
                  name="email"
                  label="電子郵件"
                  rules={[
                    { required: true, message: '請輸入您的電子郵件' },
                    { type: 'email', message: '請輸入有效的電子郵件格式' }
                  ]}
                >
                  <Input placeholder="請輸入您的電子郵件" />
                </Form.Item>
                
                <Form.Item
                  name="phone"
                  label="聯絡電話"
                >
                  <Input placeholder="請輸入您的聯絡電話" />
                </Form.Item>
                
                <Form.Item
                  name="subject"
                  label="主旨"
                  rules={[{ required: true, message: '請輸入主旨' }]}
                >
                  <Input placeholder="請輸入主旨" />
                </Form.Item>
                
                <Form.Item
                  name="message"
                  label="訊息內容"
                  rules={[{ required: true, message: '請輸入訊息內容' }]}
                >
                  <TextArea rows={4} placeholder="請輸入您的訊息內容" />
                </Form.Item>
                
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block>
                    送出訊息
                  </Button>
                </Form.Item>
              </StyledForm>
            </Col>
          </Row>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default ContactPage; 