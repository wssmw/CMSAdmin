/** @format */

import { Alert, Button, Form, Input, Select, Space, Steps } from "antd";
import React, { memo } from "react";
import { useState } from "react";

const SubStep = memo(() => {
  return (
    <div style={{width:'400px'}}>
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
    </div>
  );
});

export default SubStep;
