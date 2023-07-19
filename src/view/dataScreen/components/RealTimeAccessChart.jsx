import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import totalimg from '../images/total.png'
const RealTimeAccessChart = memo((props) => {
  const {data} = props
  const num = "216908";
  const mainRef = useRef()
  const option = {
		title: [
			{
				text: (0.5* 100).toFixed(0) + "%",
				left: "49%",
				top: "35%",
				textAlign: "center",
				textStyle: {
					fontSize: "14",
					fontWeight: "normal",
					color: "#ffffff",
					align: "center",
					textBorderColor: "rgba(0, 0, 0, 0)",
					textShadowColor: "#000",
					textShadowBlur: 0,
					textShadowOffsetX: 0,
					textShadowOffsetY: 1
				}
			},
			{
				text: "预约量",
				left: "49%",
				top: "25%",
				textAlign: "center",
				textStyle: {
					fontSize: "15",
					fontWeight: "normal",
					color: "#ffffff",
					align: "center",
					textBorderColor: "rgba(0, 0, 0, 0)",
					textShadowColor: "#000",
					textShadowBlur: 0,
					textShadowOffsetX: 0,
					textShadowOffsetY: 1
				}
			}
		],
		grid: {
			top: "0",
			left: "0px",
			right: "0px",
			bottom: "0",
			containLabel: true
		},
		polar: {
			radius: ["75%", "85%"],
			center: ["50%", "50%"]
		},
		angleAxis: {
			max: 120,
			clockwise: false,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			},
			startAngle: 188
		},
		radiusAxis: {
			type: "category",
			show: true,
			axisLabel: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [
			{
				type: "liquidFill",
				radius: "70%",
				z: 2,
				center: ["50%", "50%"],
				data: [0.4, 0.4, 0.4], // data个数代表波浪数
				itemStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#35FAB6" // 0% 处的颜色
							},
							{
								offset: 1,
								color: "rgba(40, 209, 247,0.3)" // 100% 处的颜色
							}
						],
						global: false // 缺省为 false
					}
				},
				outline: {
					borderDistance: 0,
					itemStyle: {
						borderWidth: 2,
						borderColor: "#31d8d5",
						shadowBlur: 20,
						shadowColor: "#50c1a7"
					}
				},
				label: {
					show: false
				},
				backgroundStyle: {
					borderWidth: 1,
					// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
					color: {
						type: "radial",
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: "#0D2648" // 0% 处的颜色
							},
							{
								offset: 0.8,
								color: "#0D2648" // 100% 处的颜色
							},
							{
								offset: 1,
								color: "#228E7D" // 100% 处的颜色
							}
						],
						global: false // 缺省为 false
					}
				}
			},
			{
				type: "pie",
				radius: ["80%", "80%"],
				center: ["50%", "50%"],
				z: 1,
				label: {
					show: false
				},
				silent: true,
				itemStyle: {
					borderWidth: 2,
					borderType: [8, 10],
					borderDashOffset: 15,
					borderColor: "#31d8d5",
					color: "#11144e",
					borderCap: "round"
				},
				data: [100]
			},
			{
				type: "bar",
				data: [55],
				z: 10,
				coordinateSystem: "polar",
				roundCap: true,
				color: "#31d8d5"
			}
		]
	};
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(mainRef.current);
    // 绘制图表
    myChart.setOption(option);
    return () => {
      // myChart.dispose() 销毁实例。实例销毁后无法再被使用
      myChart.dispose()
  }
  }, [])
  return (
    <div>
      <div className="actual_total">
        <div className="expect-total">可预约总量<i>999999</i>人</div>
        <div className="num" style={{display:"flex"}}>
          {num.split('').map((item,index)=>(
            <div className="item" style={{background:`url(${totalimg})`}} key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div className="main" style={{width:"100%",height:'calc(100% - 50px)'}} ref={mainRef}></div>
    </div>
  )
})

export default RealTimeAccessChart