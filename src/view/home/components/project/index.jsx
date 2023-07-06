import { Card } from 'antd'
import React, { createElement, memo } from 'react'
import { ProjectWrapper } from './style';
import * as Icon from '@ant-design/icons/lib'

const Project = memo(() => {
  const gridStyle = {
    width: '33.3%',
  };
  const projectData = [
    {
      icon: "GithubOutlined",
      title: "Github",
      desc: "是一个面向开源及私有软件项目的托管平台。",
      author: "开源君 2021-07-04",
      color: "#333639",
      link: "https://github.com/"
    },
    {
      icon: "GitlabOutlined",
      title: "Gitlab",
      desc: "基于git的项目管理软件。",
      author: "学不动也要学 2021-07-04",
      color: "#47ba86",
      link: "https://gitlab.com/users/sign_in"
    },
    {
      icon: "Html5Outlined",
      title: "HTML5",
      desc: "HTML5是互联网的下一代标准。",
      author: "撸码也是一种艺术 2021-04-01",
      color: "#e4502c",
      link: "https://www.w3school.com.cn/html/html5_intro.asp"
    },
    {
      icon: "TaobaoCircleOutlined",
      title: "淘宝网",
      desc: "只有你想不到，没有你淘不到。",
      author: "购物天地 2021-04-01",
      color: "#42b983",
      link: "https://www.taobao.com/"
    },
    {
      icon: "AlipayCircleOutlined",
      title: "支付宝",
      desc: "致力于为企业和个人提供，简单、安全、快速、支付解决方案。",
      author: "支付工具 2021-07-04",
      color: "#61dafb",
      link: "https://auth.alipay.com/login/index.htm"
    },
    {
      icon: "WeiboOutlined",
      title: "微博",
      desc: "分享简短实时信息的社交平台。",
      author: "分享君 2021-07-04",
      color: "#dd0031",
      link: "https://weibo.com/newlogin?url=https%3A%2F%2Fweibo.com%2F"
    }
  ];
  return (
    <ProjectWrapper>
      <Card className='card' title={"工程项目"} extra={<a href="#">更多项目</a>}>
        {
          projectData.map((item) => (
            <Card.Grid style={gridStyle}>
              <div style={{display:"flex",alignItems:"center"}}>
                <span style={{fontSize:"30px",marginRight:"20px",color:item.color}}>{createElement(Icon[item.icon])}</span>
                <span><a className='link' href={item.link}>{item.title}</a></span>
              </div>
              <p className='desc'>
                {item.desc}
              </p>
              <div style={{color:"rgba(0, 0, 0, 0.25)",fontSize:"12px",whiteSpace:"nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>
                {item.author}
              </div>
            </Card.Grid>
          ))
        }
      </Card>
    </ProjectWrapper>
  )
})

export default Project