import React, { memo, useEffect, useRef, useState } from 'react'
import { DataScreenWrapper } from './style'
import RealTimeAccessChart from './components/RealTimeAccessChart'
import MaleFemaleRatioChart from './components/MaleFemaleRatioChart'
import titlebg from './images/dataScreen-title.png'
import AgeRatioChart from './components/AgeRatioChart'
import OverNext30Chart from './components/OverNext30Chart'
import HotPlateChart from './components/HotPlateChart'
import AnnualUseChart from './components/AnnualUseChart'
import PlatformSourceChart from './components/PlatformSourceChart'
import MapChart from './components/MapChart'
import { useNavigate } from 'react-router-dom'


const DataScreen = memo(() => {
  const navgate = useNavigate();
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
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) `;
      dataScreenRef.current.style.width = `1920px`;
      dataScreenRef.current.style.height = `1080px`;
    }
    timer = setInterval(()=>{
      setTime(new Date().toString());
    },1000)
    window.addEventListener('resize',()=>{

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
        <div className="dataScreen_header">
          <div className="header-lf">
            <span className="header-screening" onClick={()=>navgate('/')}>首页</span>
          </div>
          <div className="header-ct">
            <div className="header-ct-title">
              <span>智慧旅游可视化大数据展示平台</span>
              <div className="header-ct-warning">平台高峰预警信息（2条）</div>
            </div>
          </div>
          <div className="header-rg">
            <span className="header-download">统计报告</span>
            <span className="header-time">当前时间：{ time }</span>
          </div>
        </div>
        <div className="dataScreen_main">
            <div className="dataScreen-lf">
              <div className="dataScreen-top">
                <div className="dataScreen-main-title">
                  <span>实时游客统计</span>
                  <img src={titlebg} alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <RealTimeAccessChart data = {0.5}/>
                </div>
              </div>
              <div className="dataScreen-center">
                <div className="dataScreen-main-title">
                  <span>男女比例</span>
                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <MaleFemaleRatioChart />
                </div>
              </div>
              <div className="dataScreen-bottom">
                <div className="dataScreen-main-title">
                  <span>年龄比例</span>
                  <img src={titlebg} alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <AgeRatioChart />

                  <img src="./images/dataScreen-title.png" alt="" />
                </div>
              </div>
            </div>
            <div className="dataScreen-ct">
              <div className="dataScreen-map">
                <div className="dataScreen-map-title">景区实时客流量</div>
                {/* <!-- <vue3-seamless-scroll
                  :list="alarmData"
                  className="dataScreen-alarm"
                  :step="0.5"
                  :hover="true"
                  :limitScrollNum="3"
                >
                  <div className="dataScreen-alarm">
                    <div className="map-item" v-for="item in alarmData" :key="item.id">
                      <img src="./images/dataScreen-alarm.png" alt="" />
                      <span className="map-alarm sle">{{ item.label }} 预警：{{ item.warnMsg }}</span>
                    </div>
                  </div>
                </vue3-seamless-scroll> --> */}
                <MapChart />
              </div>
              <div className="dataScreen-cb">
                <div className="dataScreen-main-title">
                  <span>未来30天游客量趋势图</span>
                  <img src={titlebg} alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <OverNext30Chart />
                </div>
              </div>
            </div>
            <div className="dataScreen-rg">
              <div className="dataScreen-top">
                <div className="dataScreen-main-title">
                  <span>热门景区排行</span>
                  <img src={titlebg} alt="" />

                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <HotPlateChart />
                </div>
              </div>
              <div className="dataScreen-center">
                <div className="dataScreen-main-title">
                  <span>年度游客量对比</span>
                  <img src={titlebg} alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <AnnualUseChart />
                </div>
              </div>
              <div className="dataScreen-bottom">
                <div className="dataScreen-main-title">
                  <span>预约渠道数据统计</span>
                  <img src={titlebg} alt="" />
                </div>
                {/* <!-- chart区域 --> */}
                <div className="dataScreen-main-chart">
                  <PlatformSourceChart />
                </div>
              </div>
            </div>
        </div>
      </div>
    </DataScreenWrapper>
  )
})

export default DataScreen