import { Alert,message,Button } from 'antd'
import React, { memo } from 'react'
import _ from 'lodash' 
const Throttle = memo(() => {
  const [messageApi, contextHolder] = message.useMessage();
  const debounceClick = _.throttle(() => {
    messageApi.open({
      type: 'success',
      content: '我是防抖按钮触发的事件🍇🍓',
    })
  }, 500)
  return (
    <div style={{ padding: "20px", backgroundColor: "white", height: "100%", textAlign: "center" }}>
      <Alert type='info' message={"节流指令 🍇🍇🍇🍓🍓🍓"}></Alert>
      <Button onClick={e => debounceClick()} style={{ marginTop: "20px" }}>节流按钮(0.5s后执行)</Button>
      {contextHolder}
    </div>
  )
})

export default Throttle