import React, { memo } from 'react'
import {Checkbox} from 'antd'
import { AboutWrapper } from './style'
import Echart from './echarts'

const About = memo(() => {
  const data = [
    {
      name:'未明码标价',
      value:'11'
    },
    {
      name:'使用“最高级”用语',
      value:'6'
    },
    {
      name:'未表明专利号和专利种类',
      value:'5'
    },
    {
      name:'引证内容为表明出处',
      value:'3'
    },
    {
      name:'出现饮酒动作',
      value:'1'
    },
  ]
  return (
    <AboutWrapper>
      <Echart/>
    </AboutWrapper>
  )
})

export default About