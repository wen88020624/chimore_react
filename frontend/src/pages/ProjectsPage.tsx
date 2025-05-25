import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Divider, Image, Spin, Select, Space, Tag } from 'antd';
import styled from 'styled-components';
import { projectsApi, REGION_CATEGORIES } from '../services/api';
import { Project, ProjectStatus } from '../types';

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // 載入專案列表
  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = selectedCategory 
        ? await projectsApi.getByCategory(selectedCategory)
        : await projectsApi.getAll();
      setProjects(data);
    } catch {
      console.error('載入專案失敗');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [selectedCategory]);

  // 分離主要專案和其他專案
  const mainProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

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

          {/* 篩選器 */}
          <div style={{ marginBottom: 30, textAlign: 'center' }}>
            <Space>
              <Text>地區篩選：</Text>
              <Select
                placeholder="選擇地區"
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
          </div>
          
          <Spin spinning={loading}>
            {/* 主要專案展示 */}
            <Row gutter={[24, 24]}>
              {mainProjects.map(project => (
                <Col xs={24} key={project.id}>
                  <StyledCard>
                    <Row gutter={[24, 24]}>
                      <Col xs={24} md={10}>
                        <Image 
                          src={project.imageUrl || '/serviceImg.eb32ecf0.jpg'} 
                          alt={project.title}
                          preview={false}
                          style={{ width: '100%', height: 250, objectFit: 'cover' }}
                        />
                      </Col>
                      <Col xs={24} md={14}>
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
                          <Paragraph>{project.description}</Paragraph>
                          {project.statusNote && (
                            <Paragraph>
                              <Text strong>{project.statusNote}</Text>
                            </Paragraph>
                          )}
                          {(project.landArea || project.buildingFloors || project.units) && (
                            <Space wrap>
                              {project.landArea && <Tag>面積: {project.landArea}</Tag>}
                              {project.buildingFloors && <Tag>樓層: {project.buildingFloors}</Tag>}
                              {project.units && <Tag>戶數: {project.units}</Tag>}
                            </Space>
                          )}
                          {project.features && (
                            <Paragraph>
                              <Text type="secondary">特色：{project.features}</Text>
                            </Paragraph>
                          )}
                        </Space>
                      </Col>
                    </Row>
                  </StyledCard>
                </Col>
              ))}
            </Row>
            
            {/* 其他專案 */}
            {otherProjects.length > 0 && (
              <>
                <Divider />
                <Title level={3} style={{ textAlign: 'center', margin: '40px 0 30px' }}>更多項目</Title>
                <Row gutter={[24, 24]}>
                  {otherProjects.map(project => (
                    <Col xs={24} sm={12} lg={8} key={project.id}>
                      <Card
                        hoverable
                        cover={
                          <Image 
                            src={project.imageUrl || '/serviceImg.eb32ecf0.jpg'} 
                            alt={project.title}
                            preview={false}
                            height={200}
                            style={{ objectFit: 'cover' }}
                          />
                        }
                      >
                        <Card.Meta 
                          title={
                            <Space direction="vertical" size="small">
                              <Text strong>{project.title}</Text>
                              <Space>
                                <Tag color="blue">{project.category}</Tag>
                                <Tag 
                                  color={project.status === ProjectStatus.complete ? 'green' : 'orange'}
                                >
                                  {project.status === ProjectStatus.complete ? '已完成' : '進行中'}
                                </Tag>
                              </Space>
                            </Space>
                          }
                          description={
                            <div>
                              <Text type="secondary">{project.location}</Text>
                              <Paragraph ellipsis={{ rows: 2 }} style={{ marginTop: 8 }}>
                                {project.description}
                              </Paragraph>
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}

            {/* 無資料提示 */}
            {projects.length === 0 && !loading && (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <Text type="secondary">暫無專案資料</Text>
              </div>
            )}
          </Spin>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default ProjectsPage; 