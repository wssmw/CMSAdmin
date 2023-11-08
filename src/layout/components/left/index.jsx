/** @format */

import { Menu } from "antd";
import React, { createElement, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftWrapper } from "./style";
import * as Icon from "@ant-design/icons/lib";
import { useNavigate } from "react-router-dom";
import { changeTabsAction, changeTabsActiveKeyAction } from "../../../store/modules/main";

const Left = memo((props) => {
  const navgete = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector(state=>state.login.menu)
  const tabsActivekey = useSelector(state=>state.main.tabsActivekey)
  // 获取menu的所需数据
  function getItem(menu) {
    return menu.map((item) => ({
      key: item.path,
      icon: createElement(
        Icon[
          item.meta.icon == "chromeOutlined" ? "ChromeFilled" : item.meta.icon
        ]
      ),
      label: item.meta.title,
      children: item.children == undefined ? undefined : getItem(item.children),
    }));
  }
  const items = getItem(menu);
  
  // 点击左边menu，上面的tabs显示函数
  const tabs = useSelector(state=>state.main.tabs)
  const menuClick = (e) =>{
    let path = e.key
    const goal = getTabs(path,menu)
    let newtabs = [...tabs]
    let tab = {}
    tab.key = path
    tab.title = goal.meta.title
    tab.icon = goal.meta.icon
    let ishas = false
    for(const tab of newtabs){
      if(tab.key===path){
        ishas = true
        break
      }
    }
    if(!ishas){
      newtabs.push(tab)
    }
    dispatch(changeTabsAction(newtabs))
    dispatch(changeTabsActiveKeyAction(path))
    navgete(e.key);

  }
  const getTabs = (path, menu) => {
    let goal = {};
    for (const item of menu) {
      if (!path.includes(item.path)) {
        continue;
      }
      if (path === item.path) {
        goal = item;
      }
      if (item.children && item.children.length !== 0) {
        goal = getTabs(path, item.children);
      }
    }
    return goal;
  };
  return (
    <LeftWrapper>
      <div className="logo">
        <img src="/img/logo.jpg" alt="" />
        {!props.collapsed && <div className="dec">Admin</div>}
      </div>
      <div className="scroll">
        <Menu items={items} mode='inline' onClick={(e)=>menuClick(e)} selectedKeys={[tabsActivekey]}/>
      </div>
    </LeftWrapper>
  );
});

export default Left;
