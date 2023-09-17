/** @format */

import { Alert, Button, Form, Input, message, Select } from "antd";
import React, { memo } from "react";
import { useState } from "react";

const DynamicFrom = memo(() => {
  const [tableList, setTableList] = useState([
    {
      leftValue: "station",
      centerValue: "equal",
      rightValue: "",
    },
  ]);
  /* 下拉框数据 */
  const SelectLeftData = [
    {
      label: "站点",
      value: "station",
    },
    {
      label: "行业",
      value: "industry",
    },
    {
      label: "渠道来源",
      value: "channel",
    },
    {
      label: "银行",
      value: "bank",
    },
  ];
  // 中间值
  const SelectCenterDate = [
    { label: "等于", value: "equal" },
    { label: "不等于", value: "unequal" },
  ];
  /* 右侧值 */
  const SelectRightData = {
    station: [
      { value: "芳华路9号" },
      { value: "紫瑾园区" },
      { value: "嘉年华苑" },
      { value: "中山万博国际中心" },
      { value: "北京顾和园国际酒店" },
    ],
    industry: [
      { value: "金融" },
      { value: "销售" },
      { value: "军人" },
      { value: "教师" },
      { value: "演员" },
      { value: "律师" },
      { value: "学生" },
    ],
    channel: [
      { value: "抖音" },
      { value: "快手" },
      { value: "虎牙" },
      { value: "斗鱼" },
      { value: "微博" },
      { value: "微信公众号" },
      { value: "小红书" },
      { value: "哔哩哔哩" },
    ],
    bank: [
      { value: "招商银行" },
      { value: "浦发银行" },
      { value: "中信银行" },
      { value: "光大银行" },
      { value: "华夏银行" },
      { value: "民生银行" },
      { value: "广发银行" },
      { value: "兴业银行" },
      { value: "平安银行" },
    ],
  };
  const submitHandle = () => {
    message.success(`提交的数据为：${JSON.stringify(tableList)}`)
  };
  const selectHandle = (e, position, index) => {
    let s = {
      left: "leftValue",
      center: "centerValue",
      right: "rightValue",
    };
    let newTableList = [...tableList];
    console.log(newTableList[index]);
    newTableList[index][s[position]] = e;
    setTableList(newTableList);
  };
  const addHandle = () => {
    console.log("这里执行");
    let newTableList = [...tableList];
    newTableList.push({
      leftValue: "station",
      centerValue: "equal",
      rightValue: "",
    });
    setTableList(newTableList);
    console.log(newTableList, tableList);
  };
  const deleteHandle = (index) => {
    let newTableList = [...tableList];
    newTableList.splice(index, 1);
    setTableList(newTableList);
  };
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
      <Form style={{ width: "50%", marginTop: "20px" }}>
        {tableList.map((item, index) => (
          <div>
            <Form.Item label="筛选条件：">
              <div style={{ display: "flex" }}>
                <Select
                  style={{ margin: "0 10px", width: "120px" }}
                  value={item.leftValue}
                  onChange={(e) => selectHandle(e, "left", index)}
                  options={SelectLeftData}
                />
                <Select
                  style={{ margin: "0 10px", width: "120px" }}
                  value={item.centerValue}
                  onChange={(e) => selectHandle(e, "center", index)}
                  options={SelectCenterDate}
                />
                <Select
                  style={{ margin: "0 10px", width: "130px" }}
                  options={
                    SelectRightData[item.leftValue] ||
                    [].map((v) => ({ value: v }))
                  }
                  onChange={(e) => selectHandle(e, "right", index)}
                />
                {tableList.length!=1&&<Button onClick={e=>deleteHandle(index)}>x</Button>}
              </div>
            </Form.Item>
          </div>
        ))}
        <Form.Item>
          <Button style={{ width: "100%" }} onClick={addHandle}>
            添加条件
          </Button>
        </Form.Item>
        <Form.Item>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <Button  onClick={submitHandle}>搜索</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
});

export default DynamicFrom;
