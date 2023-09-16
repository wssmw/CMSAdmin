import { Alert, Button, Form, Input } from 'antd'
import React, { memo } from 'react'

const DynamicFrom = memo(() => {
  const 
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Alert style={{width:'100%'}} message="动态表单 🍓🍓🍓🍇🍇🍇" description="表单页用于向用户动态收集信息。" type="info" />
      <Form style={{width:'50%',marginTop:"20px"}}>
        <Form.Item>
          <Button style={{width:'100%'}}>添加条件</Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default DynamicFrom