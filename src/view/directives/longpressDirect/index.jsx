import React, { memo } from 'react'
import { Alert, Button, message } from 'antd'

const LongPressDirect = memo(() => {
  let timer = null
  const [messageApi, contextHolder] = message.useMessage();
  const touchStart = () =>{
    timer = setTimeout(()=>{
      messageApi.open({
        type: 'success',
        content: '我是防抖按钮触发的事件🍇🍓',
      })
    },2000)
  }
  const touchEnd = () =>{
    clearTimeout(timer)
  }
  return (
    <div style={{padding:"20px",backgroundColor:"white",height:"100%",textAlign:"center"}}>
      <Alert type='info' message={"长按指令 🍇🍇🍇🍓🍓🍓"}></Alert>
      <Button onMouseDown={e=>touchStart()} onMouseOut={e=>touchEnd()} style={{marginTop:"20px"}}>长按2s触发事件</Button>
      {contextHolder}
    </div>
  )
})

export default LongPressDirect