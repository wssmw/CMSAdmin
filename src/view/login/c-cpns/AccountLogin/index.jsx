import React, { memo } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { AccountWrapper } from './style'
import md5 from 'js-md5'
import { useDispatch } from 'react-redux'
import { changeTokenAction, fetchHomeDataAction } from '../../../../store/modules/login'
import { loginApi } from '../../../../service/module/login'
import { useNavigate } from 'react-router'
import cache from '../../../../utils/cache'

const AccountLogin = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (e) => {
    const { data } = await loginApi({ ...e,
      // password: md5(e.password) 
      password: 'e10adc3949ba59abbe56e057f20f883e'
    })
    // 存token
    dispatch(changeTokenAction(data.access_token))
    // 获取动态路由
    dispatch(fetchHomeDataAction())
    cache.setCache("token",data.access_token)
    // 跳转页面
    navigate('/')
  }
  return (
    <AccountWrapper>
      <Form
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
          <Input placeholder="请输入admin或user" />
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
            type="password"
            placeholder="123456"
          />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </div>

        <Form.Item style={{ marginTop: "10px" }}>
          <Button style={{ display: "block", width: "100%" }} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </AccountWrapper>
  )
})

export default AccountLogin