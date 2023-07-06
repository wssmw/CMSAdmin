import { Alert, Button, message } from 'antd'
import React, { memo } from 'react'
import _ from 'lodash' 
const Debounce = memo(() => {
  const [messageApi, contextHolder] = message.useMessage();
  const debounceClick = _.debounce(() =>{
    messageApi.open({
      type: 'success',
      content: '我是防抖按钮触发的事件🍇🍓',
    })
  },500)
  return (
    <div style={{padding:"20px",backgroundColor:"white",height:"100%",textAlign:"center"}}>
      <Alert type='info' message={"防抖指令 🍇🍇🍇🍓🍓🍓"}></Alert>
      <Button onClick={e=>debounceClick()} style={{marginTop:"20px"}}>防抖按钮(0.5s后执行)</Button>
      {contextHolder}
    </div>
  )
})

export default Debounce