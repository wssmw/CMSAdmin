import { createElement, memo, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Tabs } from 'antd';
import { LayoutWrapper } from './style';
import Left from './components/left';
import Top from './components/top';
import ThemeDrawer from '../components/ThemeDrawer'
import DataScreen from '../view/dataScreen';
import ThemeButton from '../components/ThemeButton';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from "@ant-design/icons/lib";
import { changeTabsAction, changeTabsActiveKeyAction } from '../store/modules/main';
const { Header, Sider, Content,Footer } = Layout;


const MyLayout = memo(() => {
  const  collapsedMenu  = useSelector((state) => ( state.theme.collapsedMenu))
  const tabs = useSelector((state) => state.main.tabs);
  const tabsActivekey = useSelector((state) => state.main.tabsActivekey);
  const isHasTabs = useSelector((state)=>state.theme.isHasTabs)
  const isHasTabsIcon = useSelector((state)=>state.theme.isHasTabsIcon)
  const footer = useSelector((state)=>state.theme.footer)
  const styleSetting = useSelector((state)=>state.theme.styleSetting)
  const isGrey = useSelector((state)=>state.theme.isGrey)
  const isWeak = useSelector((state)=>state.theme.isWeak)
  const dispatch = useDispatch()
  const navgate = useNavigate();
  const {pathname} = useLocation();
  const tabsClick = (e) => {
    dispatch(changeTabsActiveKeyAction(e));
    navgate(e);
  };
  const tabsDelete = (e) => {
    let newTabs = [...tabs];
    let index = -1;
    for (let i = 0; i < newTabs.length; i++) {
      if (newTabs[i].key === e) {
        newTabs.splice(i, 1);
        index = i;
        break;
      }
    }
    dispatch(changeTabsAction(newTabs));
    if (e === tabsActivekey) {
      navgate(newTabs[index - 1].key);
      dispatch(changeTabsActiveKeyAction(newTabs[index - 1].key));
    }
  };  
  return (
    <LayoutWrapper style={{filter:`grayscale(${isGrey?1:0}) invert(${isWeak?80:0}%)`}}>
      {
        pathname==='/dataScreen'?<DataScreen/>:<Layout className='layout'>
        <Sider theme={styleSetting} collapsed={collapsedMenu}>
          <Left/>
        </Sider>
        <Layout className='layout1'>
          <Header style={{height:'55px',padding:"0px",backgroundColor:"white"}}>
            <Top/>
          </Header>
          {isHasTabs&&<div className="tabs">
            <Tabs
              type="editable-card"
              items={tabs.map(({title,icon,key,closable}) => {
                console.log('zzzz',isHasTabsIcon)
                return {
                  label: (
                    <span className="tabsIcon">
                      {isHasTabsIcon&&(icon==='chromeOutlined'?createElement(Icon["ChromeFilled"]):createElement(Icon[icon]))}
                      {title}
                    </span>
                  ),
                  key,
                  closable
                };
              })}
              hideAdd
              activeKey={tabsActivekey}
              onChange={(e) => tabsClick(e)}
              onEdit={(e) => tabsDelete(e)}
            />
          </div>}
          
          <Content className='layout-content' style={{backgroundColor:'#f0f2f5'}}>
            <div className='content' >
              <Outlet/>
            </div>
          </Content>
          {footer&&<Footer style={{padding:0,height:"30px",textAlign:"center",backgroundColor:"white"}}>
              <a href="https://gitee.com/wangsaiqimengwen/cmsadmin" style={{color:"#858585",fontSize:"14px",lineHeight:"30px"}}>2023 © Admin By laoy0702@163.com.</a>
            </Footer>
          }
        </Layout>
        
      </Layout>
      }
      <ThemeButton/>
      <ThemeDrawer/>
    </LayoutWrapper>
  )
})

export default MyLayout