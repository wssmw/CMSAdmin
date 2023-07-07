import { memo, useRef } from 'react'
import { RightWrapper } from './style'
import { Tabs, Badge, Dropdown, Popover, Empty } from 'antd'
import {
  UserOutlined, 
  FormOutlined,
  PoweroffOutlined,
  BellOutlined
} from '@ant-design/icons'

const Right = memo(() => {
  const bellOutlinedRef = useRef()
  // 头像拓展部分
  //缩小 <CompressOutlined />
  // 放大 <ExpandOutlined />
  const items = [
    {
      label: '个人信息',
      key: '0',
      icon: <UserOutlined />
    },
    {
      label: '修改密码',
      key: '1',
      icon: <FormOutlined />
    },
    {
      type: 'divider',
    },
    {
      label: '退出登录',
      key: '3',
      icon: <PoweroffOutlined />
    },
  ];
  const message = [
    {
      key: '1',
      label: `通知(5)`,
      children:(
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      ),
    },
    {
      key: '2',
      label: `消息(0)`,
      children: <Empty description={"暂无消息"}/>,
    },
    {
      key: '3',
      label: `代办(0)`,
      children: <Empty description={"暂无代办"}/>,
    },
  ];
  // message部分
  const content = (
    <Tabs defaultActiveKey="1" items={message} />
  )

  return (
    <RightWrapper>
      <Popover trigger="click" content={content}>
        <Badge count={5}>
          <BellOutlined style={{ fontSize: "25px" }} ref={bellOutlinedRef}/>
        </Badge>
      </Popover>
      <div className="name">WSS</div>
      <Dropdown menu={{ items }} trigger={['click']}>
        <div className="avatar">
          <img src="/img/avatar.jpg" alt="" />
        </div>
      </Dropdown>
    </RightWrapper>
  )
})
export default Right