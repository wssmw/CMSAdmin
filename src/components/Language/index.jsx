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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { LanguageWrapper } from "./style";
import { CHINESE, ENGLISH } from "../../config/Laguage";
import { changeLanguageAction } from "../../store/modules/theme";
const Language = memo((props) => {
  const dispatch = useDispatch()
  const navgate = useNavigate();
  const  language  = useSelector((state) => ( state.theme.language))
  const items = [
    {
      label: 'English',
      key: ENGLISH,
      disabled:language==CHINESE?false:true
    },
    {
      label: '中文',
      key: CHINESE,
      disabled:language==CHINESE?true:false
    }
  ];
  const onClick = ({key}) =>{
      dispatch(changeLanguageAction(key))
  }
  return (
    <LanguageWrapper>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <div className="language">
          <img src="/img/language.png" alt="" />
        </div>
      </Dropdown>
    </LanguageWrapper>
  );
});

export default Language;
