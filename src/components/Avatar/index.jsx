/** @format */

import React, { memo } from "react";
import { Alert, Dropdown, Input } from "antd";
import {
    UserOutlined, 
    FormOutlined,
    PoweroffOutlined,
    BellOutlined
  } from '@ant-design/icons'
import cache from "../../utils/cache";
import { changeTokenAction } from "../../store/modules/login";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { AvatarWrapper } from "./style";
import { changeTabsAction,changeTabsActiveKeyAction } from "../../store/modules/main";
const Avatar = memo((props) => {
  const { title } = props;
  const dispatch = useDispatch()
  const navgate = useNavigate();
  const items = [
    {
      label: '个人信息',
      key: '0',
      icon: <UserOutlined />
    },
    {
      label: '修改密码',
      key: '1',
      icon: <FormOutlined />
    },
    {
      type: 'divider',
    },
    {
      label: '退出登录',
      key: '3',
      icon: <PoweroffOutlined />
    },
  ];
  const onClick = ({key}) =>{
    if(key==3){
      cache.deleteCache('token')
      cache.deleteCache('menu')
      dispatch(changeTokenAction(''))
      dispatch(changeTabsAction([
        {
          key: "/home/index",
          title:'工作台',
          icon: 'HomeFilled',
          closable: false,
        },
      ]))
      dispatch(changeTabsActiveKeyAction('/home/index'))
      navgate('/login')
    }
  }
  return (
    <AvatarWrapper>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <div className="avatar">
          <img src="/img/avatar.jpg" alt="" />
        </div>
      </Dropdown>
    </AvatarWrapper>
  );
});

export default Avatar;
