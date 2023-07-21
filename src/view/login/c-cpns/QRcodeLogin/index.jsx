import React, { memo } from 'react'
import { Space,QRCode } from 'antd'
import { QRcodeWrapper } from './style';
const QRcode = memo(() => {
  const [text, setText] = React.useState('https://ant.design/');
  return (
    <QRcodeWrapper>
      <Space direction="vertical" align="center" style={{height:"100%" ,display:"flex"}}>
        <QRCode value={text || '-'} size={227} style={{height:"227px"}}/>
      </Space>
    </QRcodeWrapper>
  )
})

export default QRcode