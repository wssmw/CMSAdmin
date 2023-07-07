import { Alert, Button, Dropdown, message } from 'antd'
import React, { memo } from 'react'


const Function = memo(() => {
  const [messageApi, contextHolder] = message.useMessage();

  const items = [
    {
      label: <div onClick={e => rightClick('发送到邮箱')}>发送到邮箱</div>,
      key: '1',
    },
    {
      label: <div onClick={e => rightClick('发送到邮箱')}>发送到手机</div>,
      key: '2',
    },
    {
      label: <div onClick={e => rightClick('发送到邮箱')}>其他</div>,
      key: '3',
    },
  ];
  const AvatarItem = (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['contextMenu']}

    >
      <img style={{width:"60px",borderRadius:"50%"}} src='/img/avatar.jpg'>
      </img>
    </Dropdown>
  )
  const ButtonItem = (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['contextMenu']}

    >
      <Button>
        右键试试
      </Button>
    </Dropdown>
  )
  const rightClick = (message) => {
    messageApi.open({
      type:"success",
      content:`右键菜单：${message}`
    });
  }

  return (
    <div style={{ height: "100%", backgroundColor: "white", padding: "20px" }}>
      <Alert type='info' message="右键菜单🍇🍇" description="右键菜单示例，指定元素右键显示操作菜单" />
      <Alert style={{margin:"20px 0"}} type='success' message="右键展示菜单" description={ButtonItem} />
      <Alert type='success' message="右键展示菜单" description={AvatarItem} />
      {contextHolder}
    </div>
  )
})

export default Function