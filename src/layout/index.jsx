import { memo, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout } from 'antd';
import { LayoutWrapper } from './style';
import Left from './components/left';
import Top from './components/top';
import DataScreen from '../view/dataScreen';
const { Header, Sider, Content,Footer } = Layout;

const MyLayout = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const {pathname} = useLocation();
  const toggleCollapsed = () =>{
    setCollapsed(!collapsed)
  }
  return (
    <LayoutWrapper>
      {
        pathname==='/dataScreen'?<DataScreen/>:<Layout className='layout'>
        <Sider style={{backgroundColor:"white"}}  collapsed={collapsed}>
          <Left collapsed = {collapsed}/>
        </Sider>
        <Layout className='layout1'>
          <Header style={{height:"100px",padding:"0px",backgroundColor:"white"}}><Top toggleCollapsed = {toggleCollapsed} collapsed={collapsed}/></Header>
          <Content className='layout-content' style={{backgroundColor:'#f0f2f5'}}>
            <div className='content' >
              <Outlet/>
            </div>
          </Content>
          <Footer style={{padding:0,height:"30px",textAlign:"center",backgroundColor:"white"}}>
            <a href="https://gitee.com/wangsaiqimengwen/cmsadmin" style={{color:"#858585",fontSize:"14px",lineHeight:"30px"}}>2023 © Admin By laoy0702@163.com.</a>
          </Footer>
        </Layout>
      </Layout>
      }
      
    </LayoutWrapper>
  )
})

export default MyLayout