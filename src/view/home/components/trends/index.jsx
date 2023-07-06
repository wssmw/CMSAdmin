import React, { memo } from 'react'
import { TrendstWrapper } from './style'
import { Card } from 'antd';

const Trend = memo(() => {
  const gridStyle = {
    width: '100%',
    padding:"15px",
    backgroundColor:"white"
  };
  const dynamicData = [
    {
      id: "1",
      title: "vue3自定义右键菜单组件",
      link: "https://juejin.cn/post/7212456518331088952",
      desc: "2023-05-06 22:06:16"
    },
    {
      id: "2",
      title: "工程化之Axios + Ts的二次封装",
      link: "https://juejin.cn/post/7175174061515866149",
      desc: "2023-05-04 12:17:16"
    },
    {
      id: "3",
      title: "less 定义全局样式",
      link: "https://juejin.cn/post/7167007858394546213",
      desc: "2023-05-03 21:37:16"
    },
    {
      id: "4",
      title: "vue3.2 - nextTick的使用",
      link: "https://juejin.cn/post/7039135899904393229",
      desc: "2023-05-02 15:27:16"
    },
    {
      id: "5",
      title: "Vue版的 hooks 库 --- VueUse",
      link: "https://juejin.cn/post/7055248384713555999",
      desc: "2023-05-01 05:30:16"
    },
    {
      id: "6",
      title: "Vue3自定义指令-10个常见的实用指令",
      link: "https://juejin.cn/post/6968996649515515917",
      desc: "2023-05-01 16:17:16"
    }
  ];
  return (
    <TrendstWrapper>
      <Card className='card' title={"动态"}>
        {
          dynamicData.map((item,index) => (
            <Card.Grid style={gridStyle} key={index}>
              <div style={{display:'flex'}}>
                <div className="left" style={{margin:'0 15px'}}>
                  <img style={{ width: "40px", borderRadius: "50%" }} src="/img/avatar.jpg" alt="" />
                </div>
                <div className="right">
                  <div className="top">
                    <a href="" style={{color:"black"}}>{item.title}</a>
                  </div>
                  <div className="bottom">{item.desc}</div>
                </div>
              </div>
            </Card.Grid>
          ))
        }
      </Card>
    </TrendstWrapper>
  )
})

export default Trend