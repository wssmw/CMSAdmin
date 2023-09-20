/** @format */

import { Button, Form, Input, InputNumber, Select, message } from "antd";
import React, { memo } from "react";
import { useState } from "react";

const SubStepOne = memo((props) => {
  const { nextHandele,setFormData } = props
  const onFinish = (values) => {
    message.success('提交成功')
    setFormData(values)
    nextHandele()
  };
  const [moneyValue,setMoneyValue] = useState('0.01') 
  const moneyHandle = (e) =>{
    setMoneyValue(e)
  }

  const resetHandle = () =>{

  }
  return (
    <div style={{width:'400px'}}>
      <Form 
        name="basic"
        labelCol={{ span: 6 }}  
        onFinish={onFinish}>
        <Form.Item label='付款账户' name='payAccount' rules={[{ required: true, message: '请选择付款账户' }]}>
          <Select options={[{label:'laoy0702@163.com',value:'laoy0702@163.com'},{label:'986953860@qq.com',value:'986953860@qq.com'}]}>
          </Select> 
        </Form.Item>
        <Form.Item label='收款账户' name='receiveAccount' rules={[{ required: true, message: '请选择收款账户' }]}>
            <Input/>
        </Form.Item>
        <Form.Item name='name' label="收款人姓名" rules={[{ required: true, message: '请输入收款人姓名' }]}>
          <Input/>
        </Form.Item>
        <Form.Item name='money' label="转账金额" rules={[{ required: true, message: '请输入转账金额' }]}>
          <InputNumber
            value={moneyValue}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            onChange={moneyHandle}
          />
        </Form.Item>
        <Form.Item>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <Button htmlType="submit">下一步</Button>
            <Button onClick={resetHandle}>重置</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
});

export default SubStepOne;
