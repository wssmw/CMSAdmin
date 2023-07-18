import { Card } from 'antd'
import React, { createElement, memo } from 'react'
import { useNavigate } from 'react-router';
import * as Icon from '@ant-design/icons/lib'
const Action = memo(() => {
  const navgate = useNavigate()
  const gridStyle = {
    width: '33.3%',
    textAlign: 'center'
  };
  const shortcutKeyList = [
    {
      icon: "FundViewOutlined",
      title: "主控台",
      color: "#68c755",
      onClick: () => {
        navgate("/dashboard/dataVisualize")
      }
    },
    {
      icon: "FileTextOutlined",
      title: "表单",
      color: "#fab558",
      onClick: () => {
        navgate("/form/basicForm");
      }
    },
    {
      icon: "LockOutlined",
      title: "权限管理",
      color: "#3da2ff",
      onClick: () => {
        navgate("/auth/menu");
      }
    },
    {
      icon: "BarChartOutlined",
      title: "数据大屏",
      color: "#f387aa",
      onClick: () => {
        navgate("/dataScreen");
      }
    },
    {
      icon: "ProjectOutlined",
      title: "关于项目",
      color: "#814dd6",
      onClick: () => {
        navgate("/about/index");
      }
    },
    {
      icon: "MailOutlined",
      title: "消息",
      color: "#5cdbd3",
      onClick: () => {}
    }
  ];
  return (
    <div>
      <Card title={"快捷操作"}>
      {
          shortcutKeyList.map((item,index) => (
            <Card.Grid key={index} style={gridStyle}>
              <div style={{ cursor: "pointer"}}>
                <div style={{color:item.color,fontSize:"26px"}} onClick={item.onClick}>{createElement(Icon[item.icon])}</div>
                <div>{item.title}</div>
              </div>
            </Card.Grid>
          ))
        }
      </Card>
    </div>
  )
})

export default Action