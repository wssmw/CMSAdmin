import React, { memo, useState } from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd';
import { LayoutWrapper } from './style';
import Left from './components/left';
import Top from './components/top';
const { Header, Sider, Content } = Layout;

const MyLayout = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () =>{
    setCollapsed(!collapsed)
  }
  return (
    <LayoutWrapper>
      <Layout className='layout'>
        <Sider style={{backgroundColor:"white"}}  collapsed={collapsed}>
          <Left collapsed = {collapsed}/>
        </Sider>
        <Layout>
          <Header><Top toggleCollapsed = {toggleCollapsed} collapsed={collapsed}/></Header>
          <Content>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  )
})

export default MyLayout