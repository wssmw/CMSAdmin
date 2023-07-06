import React, { memo } from 'react'
import { HomeWrapper } from './style'
import { Card, Col, Row } from 'antd'
import Header from './components/header'
import Project from './components/project'
import Action from './components/action'
import Trend from './components/trends'
import Github from './components/github'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Header />
        </Col>
        <Col span={12}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Project />
            </Col>
            <Col span={24}>
                <Trend />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Action />

            </Col>
            <Col span={24}>
                <Github />
            </Col>
          </Row>
        </Col>
      </Row>
    </HomeWrapper>
  )
})

export default Home