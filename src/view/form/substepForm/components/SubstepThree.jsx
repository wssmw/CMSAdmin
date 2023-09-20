/** @format */

import { Alert, Button, Form, Input, InputNumber, Result, Select, Space, Steps, message } from "antd";
import React, { memo } from "react";
import { useState } from "react";

const SubStepThree = memo((props) => {
  const { formData, setCurrentToZero } = props
  return (
    <div style={{width:'400px'}}>
      <Result
        status='success'
        title="操作成功"
        subTitle="预计两小时到账">
        <section>
          <div style={{margin:'20px'}}>付款账户:{formData?.payAccount}</div>
          <div style={{margin:'20px'}}>收款账户:{formData?.receiveAccount}</div>
          <div style={{margin:'20px'}}>收款人姓名:{formData?.name}</div>
          <div style={{margin:'20px'}}>转账金额:￥{formData?.money}</div>
        </section>
        <div style={{display:'flex',marginTop:"10px",justifyContent:'center'}}>
          <Button onClick={e=>setCurrentToZero()}>在转一笔</Button>
        </div>
      </Result>
    </div>
  );
});

export default SubStepThree;
