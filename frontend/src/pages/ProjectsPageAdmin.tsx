import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Row, 
  Col, 
  Card, 
  Image, 
  Button, 
  Modal, 
  Form, 
  Input, 
  Select, 
  message,
  Popconfirm,
  Space,
  Tag,
  Spin
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { projectsApi, authApi, REGION_CATEGORIES, PROJECT_CATEGORIES } from '../services/api';
import { Project, CreateProjectDto, ProjectStatus } from '../types';

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

const ProjectsPageAdmin: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // 載入專案列表
  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = selectedCategory 
        ? await projectsApi.getByCategory(selectedCategory)
        : await projectsApi.getAll();
      setProjects(data);
    } catch {
      message.error('載入專案失敗');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [selectedCategory]);

  // 登出
  const handleLogout = () => {
    authApi.logout();
    message.success('已登出');
    navigate('/');
  };

  // 開啟新增/編輯模態框
  const openModal = (project?: Project) => {
    setEditingProject(project || null);
    if (project) {
      form.setFieldsValue(project);
    } else {
      form.resetFields();
    }
    setModalVisible(true);
  };

  // 關閉模態框
  const closeModal = () => {
    setModalVisible(false);
    setEditingProject(null);
    form.resetFields();
  };

  // 提交表單
  const handleSubmit = async (values: CreateProjectDto) => {
    try {
      if (editingProject) {
        await projectsApi.update(editingProject.id, values);
        message.success('專案更新成功');
      } else {
        await projectsApi.create(values);
        message.success('專案創建成功');
      }
      closeModal();
      loadProjects();
    } catch {
      message.error(editingProject ? '更新失敗' : '創建失敗');
    }
  };

  // 刪除專案
  const handleDelete = async (id: string) => {
    try {
      await projectsApi.delete(id);
      message.success('專案刪除成功');
      loadProjects();
    } catch {
      message.error('刪除失敗');
    }
  };

  // 創建範例資料
  const createSampleData = async () => {
    try {
      await projectsApi.createSamples();
      message.success('範例資料創建成功');
      loadProjects();
    } catch {
      message.error('創建範例資料失敗');
    }
  };

  return (
    <>
      {/* 頁面標題區域 */}
      <div style={{ 
        height: '200px', 
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
        <Title level={1} style={{ color: 'white', zIndex: 2, margin: 0 }}>
          專案管理後台
        </Title>
        <Button 
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{ 
            position: 'absolute', 
            top: 20, 
            right: 20, 
            zIndex: 2 
          }}
        >
          登出
        </Button>
      </div>
      
      <PageContainer>
        <ContentWrapper>
          {/* 操作區域 */}
          <div style={{ marginBottom: 24 }}>
            <Row justify="space-between" align="middle">
              <Col>
                <Space>
                  <Button 
                    type="primary" 
                    icon={<PlusOutlined />}
                    onClick={() => openModal()}
                  >
                    新增專案
                  </Button>
                  <Button onClick={createSampleData}>
                    創建範例資料
                  </Button>
                  <Select
                    placeholder="選擇地區分類"
                    style={{ width: 200 }}
                    allowClear
                    value={selectedCategory || undefined}
                    onChange={setSelectedCategory}
                  >
                    {REGION_CATEGORIES.map(category => (
                      <Select.Option key={category} value={category}>
                        {category}
                      </Select.Option>
                    ))}
                  </Select>
                </Space>
              </Col>
              <Col>
                <Text>共 {projects.length} 個專案</Text>
              </Col>
            </Row>
          </div>

          {/* 專案列表 */}
          <Spin spinning={loading}>
            <Row gutter={[24, 24]}>
              {projects.map(project => (
                <Col xs={24} key={project.id}>
                  <StyledCard
                    actions={[
                      <Button 
                        key="edit"
                        type="text" 
                        icon={<EditOutlined />}
                        onClick={() => openModal(project)}
                      >
                        編輯
                      </Button>,
                      <Popconfirm
                        key="delete"
                        title="確定要刪除這個專案嗎？"
                        onConfirm={() => handleDelete(project.id)}
                        okText="確定"
                        cancelText="取消"
                      >
                        <Button 
                          type="text" 
                          danger
                          icon={<DeleteOutlined />}
                        >
                          刪除
                        </Button>
                      </Popconfirm>
                    ]}
                  >
                    <Row gutter={[24, 24]}>
                      <Col xs={24} md={8}>
                        <Image 
                          src={project.imageUrl || '/serviceImg.eb32ecf0.jpg'} 
                          alt={project.title}
                          preview={false}
                          style={{ width: '100%', height: 200, objectFit: 'cover' }}
                        />
                      </Col>
                      <Col xs={24} md={16}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <div>
                            <ProjectTitle level={3}>{project.title}</ProjectTitle>
                            <Space>
                              <Tag color="blue">{project.category}</Tag>
                              <Tag color={project.status === ProjectStatus.complete ? 'green' : 'orange'}>
                                {project.status === ProjectStatus.complete ? '已完成' : '進行中'}
                              </Tag>
                            </Space>
                          </div>
                          <ProjectLocation>{project.location}</ProjectLocation>
                          <Paragraph ellipsis={{ rows: 3 }}>
                            {project.description}
                          </Paragraph>
                          {project.statusNote && (
                            <Text strong>{project.statusNote}</Text>
                          )}
                          {(project.landArea || project.buildingFloors || project.units) && (
                            <Space wrap>
                              {project.landArea && <Tag>面積: {project.landArea}</Tag>}
                              {project.buildingFloors && <Tag>樓層: {project.buildingFloors}</Tag>}
                              {project.units && <Tag>戶數: {project.units}</Tag>}
                            </Space>
                          )}
                        </Space>
                      </Col>
                    </Row>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Spin>

          {projects.length === 0 && !loading && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Text type="secondary">暫無專案資料</Text>
            </div>
          )}
        </ContentWrapper>
      </PageContainer>

      {/* 新增/編輯專案模態框 */}
      <Modal
        title={editingProject ? '編輯專案' : '新增專案'}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={800}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            category: '都市更新',
            status: ProjectStatus.inProgress
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="專案標題"
                rules={[{ required: true, message: '請輸入專案標題' }]}
              >
                <Input placeholder="例：新北市五股區中興段777地號" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="location"
                label="專案位置"
                rules={[{ required: true, message: '請輸入專案位置' }]}
              >
                <Input placeholder="例：新北市五股區" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label="專案描述"
            rules={[{ required: true, message: '請輸入專案描述' }]}
          >
            <TextArea rows={4} placeholder="請詳細描述專案內容..." />
          </Form.Item>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="category" label="專案分類">
                <Select>
                  {PROJECT_CATEGORIES.map(cat => (
                    <Select.Option key={cat} value={cat}>{cat}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="status" label="專案狀態">
                <Select>
                  <Select.Option value={ProjectStatus.inProgress}>進行中</Select.Option>
                  <Select.Option value={ProjectStatus.complete}>已完成</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="statusNote" label="狀態說明">
                <Input placeholder="例：審議會版" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="landArea" label="土地面積">
                <Input placeholder="例：1,500平方公尺" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="buildingFloors" label="建築樓層">
                <Input placeholder="例：地上15層、地下3層" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="units" label="住宅單位數">
                <Input placeholder="例：120戶" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="features" label="專案特色">
            <TextArea rows={2} placeholder="例：完善的公共設施、綠化空間..." />
          </Form.Item>

          <Form.Item name="imageUrl" label="圖片URL">
            <Input placeholder="例：/projectInHome1.jpg" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={closeModal}>取消</Button>
              <Button type="primary" htmlType="submit">
                {editingProject ? '更新' : '創建'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProjectsPageAdmin; 