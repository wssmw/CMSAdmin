import { Alert, Watermark } from 'antd'
import React, { memo } from 'react'

const WatermarkDirect = memo(() => {
  return (
    <Watermark content="Admin" style={{height:"100%"}}>
      <div style={{ padding: "20px", backgroundColor: "white", height: "100%" }}>
        <Alert type='info' message={"水印指令 🍇🍇🍇🍓🍓🍓"} />
      </div>
    </Watermark>

  )
})

export default WatermarkDirect