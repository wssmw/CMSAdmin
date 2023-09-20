/** @format */

import { Alert, Steps } from "antd";
import React, { memo } from "react";
import { useState } from "react";
import SubStepOne from "./components/SubstepOne";
import SubStepTwo from "./components/SubstepTwo";
import SubStepThree from "./components/SubstepThree";

const SubStep = memo(() => {
  const [current,setCurrent] = useState(0)
  const [formData,setFormData] = useState({})
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
  const setCurrentToZero = () =>{
    setCurrent(0)
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
        message="分步表单🍇🍇🍇"
        description="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
        type="info"
      />
      <Steps style={{width:'900px',marginTop:'20px'}} current={current} items={steps}></Steps>
      {
        current===0&&<SubStepOne nextHandele={nextHandele} setFormData = {setFormData}/>
      }
      {
        current===1&&<SubStepTwo formData={formData} prevHandle={prevHandle} nextHandele={nextHandele}/>
      }
      {
        current===2&&<SubStepThree formData={formData} setCurrentToZero={setCurrentToZero}/>
      }
    </div>
  );
});

export default SubStep;
