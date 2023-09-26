import  { createElement, memo, useEffect, useRef, useState } from 'react'
import { TopWrapper } from './style'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Tabs } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from '@ant-design/icons/lib'
import Right from './components/right';
import { changeTabsAction, changeTabsActiveKeyAction } from '../../../store/modules/main';
const Top = memo((props) => {
  const collapsedRef = useRef(null)
  const breadcrumbRef = useRef(null)
  const location = useLocation();
  const dispatch = useDispatch()
  const navgate = useNavigate()
  const { menu,tabs,tabsActivekey } = useSelector((state) => ({
    menu: state.login.menu,
    tabs:state.main.tabs,
    tabsActivekey:state.main.tabsActivekey
  }))
  const [item, setItem] = useState([])
  const toggleCollapsed = () => {
    props.toggleCollapsed()
  }
  // 生成面包屑所需要格式的函数
  const getTitle = (icon, title) => {
    if (icon == "chromeOutlined") {
      icon = "ChromeFilled"
    }
    return (
      <>
        {createElement(Icon[icon])}
        <span>{title}</span>
      </>
    )
  }
  // 获取面包屑的路径
  const getItem = (path, menu, resItem) => {
    for (const v of menu) {
      if (!location.pathname.includes(v.path)) {
        continue
      }
      let item = {}
      item.href = ''
      item.title = getTitle(v.meta.icon, v.meta.title)
      resItem.push(item)
      if (v.path === location.pathname) {
        return resItem
      }
      if (v.children && v.children.length != 0) {
        getItem(path, v.children, resItem)
      }
    }
    return resItem
  }
  const tabsClick = (e) =>{
    console.log(e);
    dispatch(changeTabsActiveKeyAction(e))
    navgate(e)
  }
  const tabsDelete = (e) =>{
    let newTabs = [...tabs]
    let index = -1
    for(let i=0;i<newTabs.length;i++){
      if(newTabs[i].key===e){
        newTabs.splice(i,1)
        index = i
        break
      }
    }
    dispatch(changeTabsAction(newTabs))
    if(e===tabsActivekey){
      navgate(newTabs[index-1].key)
      dispatch(changeTabsActiveKeyAction(newTabs[index-1].key))
    }
  }
  useEffect(() => {
    let newItem = getItem(location.pathname, menu, [])
    console.log(newItem);
    setItem(newItem)
    }, [location])
  
  return (
    <TopWrapper>
      <div className="top">
        <div className="left" ref={collapsedRef}>
          <button className='collapsed' onClick={toggleCollapsed}>
            {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <div className="Breadcrumb" ref={breadcrumbRef}>
            <Breadcrumb
              separator=">"
              items={item}
            />
          </div>
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
      <Divider style={{margin:0}}/>
      <div className="bottom">
        <Tabs type="editable-card" 
        items={tabs} hideAdd 
        activeKey={tabsActivekey} 
        onChange={e=>tabsClick(e)}
        onEdit = {e=>tabsDelete(e)}
        />
      </div>
    </TopWrapper>
  )
})

export default Top