import { Alert, Button, Input, Space, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { memo, useRef } from 'react'
import copy from 'copy-to-clipboard';
const CopyDirect = memo(() => {
  const [messageApi, contextHolder] = message.useMessage();
  const inputRef = useRef()
  const copeClick = () =>{
    copy(inputRef.current.input.value);
    messageApi.open({
      type: 'success',
      content: '复制成功',
    })
  }
  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center",backgroundColor:"white",height:"100%",padding:"20px"}}>
      <Alert style={{width:"100%",margin:"20px"}} type='info' message={"复制指令🍇🍇🍇🍒🍒🍒"}></Alert>
      <div style={{width:"600px"}}>
        <Space.Compact
          style={{
            width: '100%',
            margin:"20px 0  "
          }}
        >
          <Input ref={inputRef} defaultValue='我是被复制的内容 🍒🍇🍊，2023-4-21 14:02:59'/>
          <Button onClick={e=>copeClick()}>复制</Button>
        </Space.Compact>
        {contextHolder}
        <TextArea rows={4} placeholder="测试粘贴效果" />
      </div>
    </div>
  )
})

export default CopyDirect