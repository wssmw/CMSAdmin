import React, { memo, useEffect, useState } from 'react'
import { UserWrapper } from './style'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Form, Input, Checkbox, Button, Modal, Tabs, Space,
  QRCode
} from 'antd'
import Code from './c-cpns/code';

const User = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [text, setText] = React.useState('https://ant.design/')
  const onFinish = (e) => {
    console.log(e);
  }
  const showModal = (e) => {
    setIsModalOpen(true)
  }

  const handleOk = (e) => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const name = ["二维码", "账号"]
  const zhanghao = (
    <Form
      style={{ margin: "30px" }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
        <Checkbox>Remember me</Checkbox>
        <div>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </div>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
  const erweima = (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
  )
  return (
    <UserWrapper>
      <Button className='btn' onClick={showModal}>
        登录
      </Button>
      <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tabs
          style={{ textAlign: "center" }}
          defaultActiveKey="1"
          centered
          items={name.map((item, i) => {
            return {
              label: item,
              key: i,
              children: i == 1 ? zhanghao : erweima,
            };
          })}
        />

      </Modal>
      <Code/>
      <a href="about">跳转页面</a>
      <img src="/img/1.jpg" alt="" />
    </UserWrapper >
  )
})

export default User