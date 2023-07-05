import React, { memo } from 'react'
import { TopWrapper } from './style'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Top = memo((props) => {
  const toggleCollapsed = () => {
    props.toggleCollapsed()
  }
  return (
    <TopWrapper>
      <button onClick={toggleCollapsed}>
        {props.collapsed?<MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
    </TopWrapper>
  )
})

export default Top