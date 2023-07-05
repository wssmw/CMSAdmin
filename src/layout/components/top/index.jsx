import React, { createElement, memo, useEffect, useState } from 'react'
import { TopWrapper } from './style'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Tabs } from 'antd';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import * as Icon from '@ant-design/icons/lib'
import Right from './components/right';
const Top = memo((props) => {
  const location = useLocation();
  const { menu,tabs } = useSelector((state) => ({
    menu: state.login.menu,
    tabs:state.main.tabs
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
  useEffect(() => {
    let newItem = getItem(location.pathname, menu, [])
    console.log(newItem);
    setItem(newItem)
    }, [location])
  
  return (
    <TopWrapper>
      <div className="top">
        <div className="left">
          <button className='collapsed' onClick={toggleCollapsed}>
            {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <div className="Breadcrumb">
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
        <Tabs type="editable-card" items={tabs} hideAdd/>
      </div>
    </TopWrapper>
  )
})

export default Top