import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
import man from '../images/man.png'
import woman from '../images/woman.png'
import man_bg from '../images/man-bg.png'
import woman_bg from '../images/woman-bg.png'

const MaleFemaleRatioChart = memo(() => {
  const data = {
		man: 0.6,
		woman: 0.4
	}
  const option= {
		xAxis: {
			type: "value",
			show: false
		},
		grid: {
			left: 0,
			top: "30px",
			bottom: 0,
			right: 0
		},
		yAxis: [
			{
				type: "category",
				position: "left",
				data: ["男生"],
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					show: false
				}
			},
			{
				type: "category",
				position: "right",
				data: ["女士"],
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					show: false,
					padding: [0, 0, 40, -60],
					fontSize: 12,
					lineHeight: 60,
					color: "rgba(255, 255, 255, 0.9)",
					formatter: "{value}" + data.woman * 100 + "%",
					rich: {
						a: {
							color: "transparent",
							lineHeight: 30,
							fontFamily: "digital",
							fontSize: 12
						}
					}
				}
			}
		],
		series: [
			{
				type: "bar",
				barWidth: 20,
				data: [data.man],
				z: 20,
				itemStyle: {
					borderRadius: 10,
					color: "#007AFE"
				},
				label: {
					show: true,
					color: "#E7E8ED",
					position: "insideLeft",
					offset: [0, -20],
					fontSize: 12,
					formatter: () => {
						return `男士 ${data.man * 100}%`;
					}
				}
			},
			{
				type: "bar",
				barWidth: 20,
				data: [1],
				barGap: "-100%",
				itemStyle: {
					borderRadius: 10,
					color: "#FF4B7A"
				},
				label: {
					show: true,
					color: "#E7E8ED",
					position: "insideRight",
					offset: [0, -20],
					fontSize: 12,
					formatter: () => {
						return `女士 ${data.woman * 100}%`;
					}
				}
			}
		]
	};
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.bottom'));
    // 绘制图表
    myChart.setOption(option);
    return () => {
      // myChart.dispose() 销毁实例。实例销毁后无法再被使用
      myChart.dispose()
  }
  }, [])
  return (
    <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div className="top" style={{display:"flex"}}>
          <div className="left" style={{width:"110px",margin:"20px",height:"115px",display:"flex",background:`url(${man_bg})`,backgroundSize:"100% 100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <span style={{color:"white",marginBottom:"15px"}}>男士</span>
            <img style={{marginBottom:"20px"}} src={man} alt="" />
          </div>
          <div className="right" style={{width:"110px",margin:"20px",height:"115px",display:"flex",background:`url(${woman_bg})`,backgroundSize:"100% 100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <span style={{color:"white",marginBottom:"15px"}}>女士</span>
            <img style={{marginBottom:"20px"}} src={woman} alt="" />
          </div>
        </div>
        <div className="bottom" style={{width:"200px",height:"60px"}}></div>
      </div>
    </div>
  )
})

export default MaleFemaleRatioChart