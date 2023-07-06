import React, { memo } from 'react'
import { Card, Col, Row } from 'antd'
const Header = memo(() => {
  return (
    <div>
      <Row gutter={0}>
        <Col span={24}>
          <Card title="工作台" bordered={false}>
            <Row>
              <Col span={12} style={{display:'flex',alignItems:"center"}}>
                <div className="left" style={{margin:"0 10px"}}>
                  <img style={{width:"52px",height:"52px",borderRadius:"50%"}} src="/img/avatar.jpg" alt="" />
                </div>
                <div className="right">
                  <div className="top" style={{fontSize:"20px"}}>
                    中午好 🌞，GuYue，开始您一天的工作吧！ 
                  </div>
                  <div className="bottom">
                    今日阴转大雨，17℃ - 28℃，出门记得带伞哦。
                  </div>
                </div>
              </Col>
              <Col span={12} style={{display:"flex"}}>
                <div style={{flex:1}}>
                  <div>项目数</div>
                  <div style={{fontSize:"18px",fontWeight:"600"}}>1600</div>
                </div>
                <div style={{flex:1}}>
                  <div>待办</div>
                  <div  style={{fontSize:"18px",fontWeight:"600"}}>9/16</div>
                </div>
                <div style={{flex:1}}>
                  <div>消息</div>
                  <div style={{fontSize:"18px",fontWeight:"600"}}>1,139</div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
})

export default Header