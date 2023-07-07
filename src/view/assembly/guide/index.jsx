import React, { memo, useRef, useState } from 'react'
import {Alert, Button, Tour} from 'antd'
import  Right  from '../../../layout/components/top/components/right'
const Guide = memo(() => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: '折叠菜单',
      description: '打开 && 关闭侧边栏',
      target: () => ref1.current,
    },
    {
      title: '面包屑导航',
      description: '指示当前页面位置',
      target: () => ref2.current,
    },
    {
      title: '信息识别',
      description: '接收公司信息',
      target: () => ref3.current,
    },
  ];
  return (
    <div style={{position:"relative",height:"100%",backgroundColor:"white",padding:"20px",textAlign:"center"}}>
      <Alert type='info' message="引导页 🍓🍓🍓🍇🍇🍇"/>
      <Alert style={{margin:"20px 0"}} type='info' message="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js."/>
      <Button  onClick={() => setOpen(true)}>打开引导页</Button>
      <Tour style={{width:"200px"}} open={open} onClose={() => setOpen(false)} steps={steps} />
      <div ref={ref1} style={{position:"absolute",top:"-88px",left:"5px",width:"22px",height:"22px",backgroundColor:"red"}}></div>
      <div ref={ref2} style={{position:"absolute",top:"-88px",left:"38px",width:"160px",height:"22px",backgroundColor:"red"}}></div>
      <div ref={ref3} style={{position:"absolute",top:"-90px",right:"140px",width:"30px",height:"30px",backgroundColor:"red"}}></div>
    </div>
  )
})

export default Guide