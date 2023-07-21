import React, { memo, useEffect, useRef, useState } from 'react'
import { DataScreenWrapper } from './style'
import RealTimeAccessChart from './components/RealTimeAccessChart'
import MaleFemaleRatioChart from './components/MaleFemaleRatioChart'

const DataScreen = memo(() => {
  let timer = null
  const [time,setTime] = useState()
  
  const dataScreenRef = useRef()
  // 根据浏览器大小推断缩放比例
  const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
  };
  useEffect(()=>{
    timer = setInterval(()=>{
      console.log(new Date().toString());
      setTime(new Date().toString());
    },1000)
    window.addEventListener('resize',()=>{
      console.log(dataScreenRef.current.style);
      if(dataScreenRef.current){
        dataScreenRef.current.style.transform = `scale(${getScale()})`
      }
    })
    return () =>{
      clearInterval(timer)
    }
  },[])
  return (
    <DataScreenWrapper >
      <div className="dataScreen_content" ref={dataScreenRef}>
        <div class="dataScreen_header">
          <div class="header-lf">
            <span class="header-screening">首页</span>
          </div>
          <div class="header-ct">
            <div class="header-ct-title">
              <span>智慧旅游可视化大数据展示平台</span>
              <div class="header-ct-warning">平台高峰预警信息（2条）</div>
            </div>
          </div>
          <div class="header-rg">
            <span class="header-download">统计报告</span>
            <span class="header-time">当前时间：{ time }</span>
          </div>
        </div>
        <div className="dataScreen_main">
            <div class="dataScreen-lf">
              <div class="dataScreen-top">
                <div class="dataScreen-main-title">
                  <span>实时游客统计</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  <RealTimeAccessChart data = {0.5}/>
                </div>
              </div>
              <div class="dataScreen-center">
                <div class="dataScreen-main-title">
                  <span>男女比例</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  <MaleFemaleRatioChart />
                </div>
              </div>
              <div class="dataScreen-bottom">
                <div class="dataScreen-main-title">
                  <span>年龄比例</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  {/* <AgeRatioChart ref="AgeRatioRef" /> */}
                </div>
              </div>
            </div>
            <div class="dataScreen-ct">
              <div class="dataScreen-map">
                <div class="dataScreen-map-title">景区实时客流量</div>
                {/* <!-- <vue3-seamless-scroll
                  :list="alarmData"
                  class="dataScreen-alarm"
                  :step="0.5"
                  :hover="true"
                  :limitScrollNum="3"
                >
                  <div class="dataScreen-alarm">
                    <div class="map-item" v-for="item in alarmData" :key="item.id">
                      <img src="./images/dataScreen-alarm.png" alt="" />
                      <span class="map-alarm sle">{{ item.label }} 预警：{{ item.warnMsg }}</span>
                    </div>
                  </div>
                </vue3-seamless-scroll> --> */}
                {/* <mapChart ref="MapChartRef" /> */}
              </div>
              <div class="dataScreen-cb">
                <div class="dataScreen-main-title">
                  <span>未来30天游客量趋势图</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  {/* <OverNext30Chart ref="OverNext30Ref" /> */}
                </div>
              </div>
            </div>
            <div class="dataScreen-rg">
              <div class="dataScreen-top">
                <div class="dataScreen-main-title">
                  <span>热门景区排行</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  {/* <HotPlateChart ref="HotPlateRef" /> */}
                </div>
              </div>
              <div class="dataScreen-center">
                <div class="dataScreen-main-title">
                  <span>年度游客量对比</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  {/* <AnnualUseChart ref="AnnualUseRef" /> */}
                </div>
              </div>
              <div class="dataScreen-bottom">
                <div class="dataScreen-main-title">
                  <span>预约渠道数据统计</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div class="dataScreen-main-chart">
                  {/* <PlatformSourceChart ref="PlatformSourceRef" /> */}
                </div>
              </div>
            </div>
        </div>
      </div>
    </DataScreenWrapper>
  )
})

export default DataScreen