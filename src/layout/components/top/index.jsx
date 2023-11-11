/** @format */

import { createElement, memo, useEffect, useRef, useState } from "react";
import { TopWrapper } from "./style";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Icon from "@ant-design/icons/lib";
import Right from "./components/right";
import { changeCollapsedMenuAction } from "../../../store/modules/theme";
const Top = memo((props) => {
  const collapsedRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.login.menu);
  const [item, setItem] = useState([]);
  const  collapsedMenu  = useSelector((state) => ( state.theme.collapsedMenu))
  const breadcrumb = useSelector((state)=>state.theme.breadcrumb)
  const breadcrumbIcon = useSelector((state)=>state.theme.breadcrumbIcon)

  // 生成面包屑所需要格式的函数
  const getTitle = (icon, title) => {
    if (icon == "chromeOutlined") {
      icon = "ChromeFilled";
    }
    return (
      <>
        {breadcrumbIcon&&createElement(Icon[icon])}
        <span>{title}</span>
      </>
    );
  };
  // 获取面包屑的路径
  const getItem = (path, menu, resItem) => {
    for (const v of menu) {
      if (!location.pathname.includes(v.path)) {
        continue;
      }
      let item = {};
      item.href = "";
      item.title = getTitle(v.meta.icon, v.meta.title);
      resItem.push(item);
      if (v.path === location.pathname) {
        return resItem;
      }
      if (v.children && v.children.length != 0) {
        getItem(path, v.children, resItem);
      }
    }
    return resItem;
  };
  useEffect(() => {
    let newItem = getItem(location.pathname, menu, []);
    setItem(newItem);
  }, [location]);
  useEffect(()=>{
    let newItem = getItem(location.pathname, menu, []);
    setItem(newItem);
  },[breadcrumbIcon])
  return (
    <TopWrapper>
      <div className="top">
        <div className="left" ref={collapsedRef}>
          <button className="collapsed" onClick={()=>dispatch(changeCollapsedMenuAction(!collapsedMenu))}>
            {collapsedMenu? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <div className="Breadcrumb" ref={breadcrumbRef}>
           
            { breadcrumb&&<Breadcrumb separator=">" items={item} />}
          </div>
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </TopWrapper>
  );
});

export default Top;
