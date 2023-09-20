/** @format */

import { Alert, Button, Form, Input, InputNumber, Select, Space, Steps, message } from "antd";
import React, { memo } from "react";

const SubStepTwo = memo((props) => {
  const { formData, prevHandle,nextHandele } = props
  const submit = () =>{
    console.log('111');
    nextHandele()
  }
  return (
    <div style={{width:'400px'}}>
      <section style={{backgroundColor:"ghostwhite",padding:"20px",marginTop:"10px"}}>
        <div style={{margin:'20px'}}>付款账户:{formData?.payAccount}</div>
        <div style={{margin:'20px'}}>收款账户:{formData?.receiveAccount}</div>
        <div style={{margin:'20px'}}>收款人姓名:{formData?.name}</div>
        <div style={{margin:'20px'}}>转账金额:￥{formData?.money}</div>
      </section>
      <Form onFinish={submit} style={{marginTop:'10px'}}>
        <Form.Item label="支付密码" name="password" rules={[{required:true,message:'请输入密码'}]}>
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item style={{display:'flex',justifyContent:'space-around'}}>
          <Button htmlType="submit">提交</Button>
          <Button onClick={prevHandle}>上一步</Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default SubStepTwo;
