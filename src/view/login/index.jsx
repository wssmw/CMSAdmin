import React, { memo } from 'react'
import { LoginWrapper } from './style'
import { Tabs } from 'antd'
import AccountLogin from './c-cpns/AccountLogin'
import QRcode from './c-cpns/QRcodeLogin'

const Login = memo(() => {

  const items = [
    {
      key: '1',
      label: `账号密码登录`,
      children: <AccountLogin/>,
    },
    {
      key: '2',
      label: `二维码登录`,
      children: <QRcode/>,
    },
  ];
  return (
    <LoginWrapper>
      <div className="login">
      <Tabs  centered  defaultActiveKey="1" items={items} />
      </div>
    </LoginWrapper>
  )
})

export default Login