import React, { memo } from 'react'
import { AboutWrapper } from './style'
import pak from '../../../package.json'
import { Descriptions } from 'antd'
import DescriptionsItem from 'antd/es/descriptions/Item'
const { name, version, dependencies } = pak
console.log(pak)
const About = memo(() => {
  const date = new Date()
  console.log(date);
  return (
    <AboutWrapper>
      <div className='Descriptions'>
        <h2>项目简介</h2>
        <p>Admin 是一个基于 React18、react-router、axios、antd、echarts 开源的后台管理系统，本项目使用了常用的一些功能，比如动态路由，状态持久化，全局布局的修改，大屏展示等，另外本项目也封装了一些常用组件，比如复制，水印等。</p>
      </div>
      <Descriptions className='Descriptions' bordered title="项目信息">
        <DescriptionsItem span={2} label='版本号'>{version}</DescriptionsItem>
        <DescriptionsItem span={2} label='发布时间'>{date.toString()}</DescriptionsItem>
        <DescriptionsItem span={2} label='gitee'>gitee</DescriptionsItem>
        <DescriptionsItem span={2} label='github'>github</DescriptionsItem>
        <DescriptionsItem span={2} label='文档地址'>文档地址</DescriptionsItem>
        <DescriptionsItem span={2} label='预览地址'>预览地址</DescriptionsItem>
      </Descriptions>
      <Descriptions className='Descriptions' bordered title="生产环境依赖">
        {
          Object.keys(dependencies).map(item=>{
        return <DescriptionsItem span={2} label={item}>{dependencies[item]}</DescriptionsItem>
          })
        }
      </Descriptions>
    </AboutWrapper>
  )
})

export default About