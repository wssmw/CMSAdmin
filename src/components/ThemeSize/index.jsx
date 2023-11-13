/** @format */

import React, { memo } from "react";
import {  Dropdown } from "antd";
import {
    FontSizeOutlined
  } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import { SizeWapper } from "./style";
import { changeSizeAction } from "../../store/modules/theme";
const ThemeSize = memo((props) => {
  const dispatch = useDispatch()
  const  size  = useSelector((state) => ( state.theme.size))
  const items = [
    {
      label: '默认',
      key: 'middle',
      disabled:size=='middle'?true:false
    },
    {
      label: '大型',
      key: 'big',
      disabled:size=='big'?true:false
    },
    {
      label: '小型',
      key: 'small',
      disabled:size=='small'?true:false
    },
  ];
  const onClick = ({key}) =>{
    dispatch(changeSizeAction(key))
  }
  return (
    <SizeWapper>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <div className="icon">
          <FontSizeOutlined />
        </div>
      </Dropdown>
    </SizeWapper>
  );
});

export default ThemeSize;
