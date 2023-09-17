/** @format */

import { Alert, Button, Form, Input, Select, Space, Steps } from "antd";
import React, { memo } from "react";
import { useState } from "react";
import SubStepOne from "./components/SubstepOne";

const SubStep = memo(() => {
  const [current,setCurrent] = useState(0)
  const steps = [
    {
      title: "填写转账信息",
      description: "确保填写正确"
    },
    {
      title: "确认转账信息",
      description: "确认转账信息"
    },
    {
      title: "完成转账",
      description: "恭喜您，完成转账"
    }
  ]
  const nextHandele = () =>{
    setCurrent(current+1)
  }
  const prevHandle = () =>{
    setCurrent(current-1)
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <Alert
        style={{ width: "100%" }}
        message="动态表单 🍓🍓🍓🍇🍇🍇"
        description="表单页用于向用户动态收集信息。"
        type="info"
      />
      <Steps style={{width:'900px',marginTop:'20px'}} current={current} items={steps}></Steps>
      <Form labelCol={{ span: 8 }}>
        <Form.Item label={'付款账户'} has-feedback rules={[{ required: true, message: '请选择付款账户' }]}>
          <Select options={[{label:'laoy0702@163.com',value:'laoy0702@163.com'},{label:'986953860@qq.com',value:'986953860@qq.com'}]}>
          </Select>
        </Form.Item>
        <Form.Item label={'收款账户'} has-feedback rules={[{ required: true, message: '请选择付款账户' }]}>
          <Space.Compact style={{width:'100%'}}>
            <Select style={{width:'100px'}} defaultValue={'微信'} options={[{label:'微信'},{label:'支付宝'}]} />
            <Input/>
          </Space.Compact>
        </Form.Item>
        <Form.Item label={"收款人姓名"}>
          <Input/>
        </Form.Item>
        <Form.Item label={"转账金额"}>
          <Input prefix="￥"/>
        </Form.Item>
      </Form>
      <div style={{marginTop:'20px'}}>
        {
          current!=steps.length-1&&<Button htmlType="submit">Next</Button>
        }
        {
          current!=0&&<Button onClick={prevHandle}>prev</Button>
        }
      </div>
    </div>
  );
});

export default SubStep;
