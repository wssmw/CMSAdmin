import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import totalimg from '../images/total.png'
const RealTimeAccessChart = memo((props) => {
  const num = "216908";
  const mainRef = useRef()
  // const option = {
	// 	title: [
	// 		{
	// 			text: (0.5* 100).toFixed(0) + "%",
	// 			left: "49%",
	// 			top: "35%",
	// 			textAlign: "center",
	// 			textStyle: {
	// 				fontSize: "14",
	// 				fontWeight: "normal",
	// 				color: "#ffffff",
	// 				align: "center",
	// 				textBorderColor: "rgba(0, 0, 0, 0)",
	// 				textShadowColor: "#000",
	// 				textShadowBlur: 0,
	// 				textShadowOffsetX: 0,
	// 				textShadowOffsetY: 1
	// 			}
	// 		},
	// 		{
	// 			text: "预约量",
	// 			left: "49%",
	// 			top: "25%",
	// 			textAlign: "center",
	// 			textStyle: {
	// 				fontSize: "15",
	// 				fontWeight: "normal",
	// 				color: "#ffffff",
	// 				align: "center",
	// 				textBorderColor: "rgba(0, 0, 0, 0)",
	// 				textShadowColor: "#000",
	// 				textShadowBlur: 0,
	// 				textShadowOffsetX: 0,
	// 				textShadowOffsetY: 1
	// 			}
	// 		}
	// 	],
	// 	grid: {
	// 		top: "0",
	// 		left: "0px",
	// 		right: "0px",
	// 		bottom: "0",
	// 		containLabel: true
	// 	},
	// 	polar: {
	// 		radius: ["75%", "85%"],
	// 		center: ["50%", "50%"]
	// 	},
	// 	angleAxis: {
	// 		max: 120,
	// 		clockwise: false,
	// 		axisLine: {
	// 			show: false
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			show: false
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		startAngle: 188
	// 	},
	// 	radiusAxis: {
	// 		type: "category",
	// 		show: true,
	// 		axisLabel: {
	// 			show: false
	// 		},
	// 		axisLine: {
	// 			show: false
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		}
	// 	},
	// 	series: [
	// 		{
	// 			type: "liquidFill",
	// 			radius: "70%",
	// 			z: 2,
	// 			center: ["50%", "50%"],
	// 			data: [0.4, 0.4, 0.4], // data个数代表波浪数
	// 			itemStyle: {
	// 				color: {
	// 					type: "linear",
	// 					x: 0,
	// 					y: 0,
	// 					x2: 0,
	// 					y2: 1,
	// 					colorStops: [
	// 						{
	// 							offset: 0,
	// 							color: "#35FAB6" // 0% 处的颜色
	// 						},
	// 						{
	// 							offset: 1,
	// 							color: "rgba(40, 209, 247,0.3)" // 100% 处的颜色
	// 						}
	// 					],
	// 					global: false // 缺省为 false
	// 				}
	// 			},
	// 			outline: {
	// 				borderDistance: 0,
	// 				itemStyle: {
	// 					borderWidth: 2,
	// 					borderColor: "#31d8d5",
	// 					shadowBlur: 20,
	// 					shadowColor: "#50c1a7"
	// 				}
	// 			},
	// 			label: {
	// 				show: false
	// 			},
	// 			backgroundStyle: {
	// 				borderWidth: 1,
	// 				// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
	// 				color: {
	// 					type: "radial",
	// 					x: 0.5,
	// 					y: 0.5,
	// 					r: 0.5,
	// 					colorStops: [
	// 						{
	// 							offset: 0,
	// 							color: "#0D2648" // 0% 处的颜色
	// 						},
	// 						{
	// 							offset: 0.8,
	// 							color: "#0D2648" // 100% 处的颜色
	// 						},
	// 						{
	// 							offset: 1,
	// 							color: "#228E7D" // 100% 处的颜色
	// 						}
	// 					],
	// 					global: false // 缺省为 false
	// 				}
	// 			}
	// 		},
	// 		{
	// 			type: "pie",
	// 			radius: ["80%", "80%"],
	// 			center: ["50%", "50%"],
	// 			z: 1,
	// 			label: {
	// 				show: false
	// 			},
	// 			silent: true,
	// 			itemStyle: {
	// 				borderWidth: 2,
	// 				borderType: [8, 10],
	// 				borderDashOffset: 15,
	// 				borderColor: "#31d8d5",
	// 				color: "#11144e",
	// 				borderCap: "round"
	// 			},
	// 			data: [100]
	// 		},
	// 		{
	// 			type: "bar",
	// 			data: [55],
	// 			z: 10,
	// 			coordinateSystem: "polar",
	// 			roundCap: true,
	// 			color: "#31d8d5"
	// 		}
	// 	]
	// };
	const  option = {
		title: {
			text: 'Basic Radar Chart'
		},
		legend: {
			data: ['Allocated Budget', 'Actual Spending']
		},
		radar: {
			// shape: 'circle',
			indicator: [
				{ name: 'Sales', max: 6500 },
				{ name: 'Administration', max: 16000 },
				{ name: 'Information Technology', max: 30000 },
				{ name: 'Customer Support', max: 38000 },
				{ name: 'Development', max: 52000 },
				{ name: 'Marketing', max: 25000 }
			]
		},
		series: [
			{
				name: 'Budget vs spending',
				type: 'radar',
				data: [
					{
						value: [4200, 3000, 20000, 35000, 50000, 18000],
						name: 'Allocated Budget'
					},
					{
						value: [5000, 14000, 28000, 26000, 42000, 21000],
						name: 'Actual Spending'
					}
				]
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
    <div style={{height:"100%"}}>
      <div className="actual_total" style={{position:"relative",display:"flex",justifyContent:"center"}}>
        <div className="expect-total" style={{position:"absolute",fontSize:"14px",color:"white",top:"-30px",right:"30px"}}>可预约总量<i style={{color:"#ff8100"}}>999999</i>人</div>
        <div className="num" style={{display:"flex",margin:"10px 0"}}>
          {num.split('').map((item,index)=>(
            <div className="item" style={{textAlign:"center",lineHeight:"50px",width:"52px",height:"50px",fontSize:"32px",color:"#66ffff",background:`url(${totalimg})`}} key={index}>{item}</div>
          ))}
					<div className="item" style={{textAlign:"center",lineHeight:"50px",width:"52px",height:"50px",fontSize:"32px",color:"#66ffff",background:`url(${totalimg})`}}>人</div>
        </div>
      </div>
      <div className="main" style={{width:"100%",height:`calc(100% - 80px)`}} ref={mainRef}></div>
    </div>
  )
})

export default RealTimeAccessChart