import React, { memo } from 'react'
import {Alert, Input} from 'antd'
const Menu = memo((props) => {
  const {title} = props
  return (
    <div style={{padding:"20px"}}>
      <Alert message={`我是${title} 🍓🍇🍈🍉`} type="info" />
      <Input style={{marginTop:"20px"}} placeholder="测试缓存" />
    </div>
  )
})

export default Menu