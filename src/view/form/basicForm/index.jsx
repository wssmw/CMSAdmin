import { Alert, Button, Checkbox, DatePicker, Form, Input, InputNumber, Select } from 'antd'
import { Option } from 'antd/es/mentions';
import React, { memo } from 'react'

const BasicForm = memo(() => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <Alert type='info' message="基础表单 🍓🍓🍓🍇🍇🍇"
        description="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
      />
      <div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
            padding: "20px"
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'name']}
            label="预约姓名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item
            name={['user', 'name']}
            label="预约号码"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='请输入号码' />
          </Form.Item>
          <Form.Item
            name={"date-picker"}
            label="预约时间"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name={"gender"}
            label="预约医生"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="请选择预约医生">
              <Option value="male">李医生</Option>
              <Option value="female">王医生</Option>
              <Option value="other">张医生</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={"gender"}
            label="预约医生"
          >
            <Select placeholder="请选择预约事项">
              <Option value="male">补牙</Option>
              <Option value="female">种牙</Option>
              <Option value="other">洗牙</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="性别"
          >
            <Checkbox defaultChecked>
              男
            </Checkbox>
            <Checkbox>
              女
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="intro"
            label="预约备注"
            rules={[
              {
                required: true,
                message: '请输入预约备注',
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item style={{marginLeft:"170px"}}>
            <Button style={{margin:"0 20px"}} type="primary" htmlType="submit">
              提交
            </Button>
            <Button type="primary" htmlType="submit">
              重置
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  )
})

export default BasicForm