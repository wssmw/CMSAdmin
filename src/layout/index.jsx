import React, { memo } from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd';
import { LayoutWrapper } from './style';
const { Header, Footer, Sider, Content } = Layout;

const MyLayout = memo(() => {
  console.log(123);
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  return (
    <LayoutWrapper>
      <Layout>
        <Sider style={siderStyle}>Sider</Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  )
})

export default MyLayout