import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authApi } from '../services/api';
import { LoginRequest } from '../types';

const { Title, Text } = Typography;

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const LoginTitle = styled(Title)`
  text-align: center;
  margin-bottom: 30px !important;
  color: #1f2937;
`;

const AdminLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: LoginRequest) => {
    setLoading(true);
    try {
      await authApi.login(values);
      message.success('登入成功！');
      navigate('/admin/projects');
    } catch (error) {
      message.error(error instanceof Error ? error.message : '登入失敗');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle level={2}>管理員登入</LoginTitle>
        
        <Form
          name="admin-login"
          onFinish={onFinish}
          autoComplete="off"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '請輸入電子郵件' },
              { type: 'email', message: '請輸入有效的電子郵件格式' }
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="電子郵件"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '請輸入密碼' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密碼"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{ height: '45px', fontSize: '16px' }}
            >
              登入
            </Button>
          </Form.Item>
        </Form>

        <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            測試帳號：admin@chimore.com
          </Text>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            測試密碼：admin123
          </Text>
        </Space>
      </LoginCard>
    </LoginContainer>
  );
};

export default AdminLogin; 