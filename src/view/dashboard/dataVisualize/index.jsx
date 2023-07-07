import React, { memo } from 'react'
import { Row, Col } from 'antd'
import PageView from './components/PageView';
import AreaRanking from './components/AreaRanking';
import SaleroomView from './components/SaleroomView'
import AccessSource from './components/AccessScorce'
import Item from './components/headeritem';
const DataVisuslize = memo(() => {
  const statisticList = [
    {
      title: "访问量",
      period: "周",
      value: 63089,
      change: "+31%",
      icon: "visits",
      isRise: true,
      prefix: ""
    },
    {
      title: "销售额",
      period: "周",
      value: 138826,
      change: "+23%",
      icon: "sale",
      isRise: true,
      prefix: "￥"
    },
    {
      title: "订单量",
      period: "周",
      value: 9500,
      change: "-20%",
      icon: "order_count",
      isRise: false,
      prefix: ""
    },
    {
      title: "成交额",
      period: "月",
      value: 396200,
      change: "-11%",
      icon: "volume",
      isRise: false,
      prefix: "￥"
    }
  ];
  return (
    <div style={{ height: "100%" }}>
      <Row gutter={[10, 10]}>
        {statisticList.map((item) => (
          <Col span={6}>
            <Item itemData={item}></Item>
          </Col>
        ))}
        <Col span={12}>
          <PageView />
        </Col>
        <Col span={12}>
          <AreaRanking />
        </Col>
        <Col span={12}>
          <SaleroomView />
        </Col>
        <Col span={12}>
          <AccessSource />
        </Col>
      </Row>
    </div>
  )
})

export default DataVisuslize