import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
import { useEcharts } from '../../../hooks/useEcharts';
const Pie = memo(() => {
  let option = {
		color: ["#ff9597", "#22cfe0", "#b9b1f0", "#51b7fb", "#76e68f", "#fa8b54", "#ffc545", "#ffd9a6"],
		tooltip: {
			trigger: "item"
			// formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			height: "16%",
			icon: "circle", //圆角矩形
			itemGap: 20,
			itemWidth: 16,
			itemHeight: 12,
			orient: "vertical",
			right: 0,
			bottom: "center",
			textStyle: {
				fontSize: 12
			}
		},

		series: [
			{
				name: "项目",
				type: "pie",
				roseType: "radius",
				center: ["42%", "50%"],
				radius: ["10%", "55%"],
				label: {
					show: true,
					position: "outside",
					formatter: "{d}%",
					fontSize: 14
				},
				labelLine: {
					// 视觉引导线第一根长度  type: number
					length: 5
				},
				data: [
					{
						value: 800,
						name: "使用中"
					},
					{
						value: 700,
						name: "维修"
					},
					{
						value: 600,
						name: "停工"
					},
					{
						value: 500,
						name: "报废"
					},
					{
						value: 800,
						name: "用中"
					},
					{
						value: 700,
						name: "修"
					},
					{
						value: 600,
						name: "停k工"
					},
					{
						value: 500,
						name: "报hhh废"
					}
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: "rgba(0, 0, 0, 0.5)"
					}
				}
			}
		]
	};
//   useEffect(()=>{
//     let myEcharts = echarts.init(document.querySelector('.main'))
//     myEcharts.setOption(option)
//     return () => {
//       myEcharts.dispose()
//     }
//   })
  return (
    <div style={{height:"100%",backgroundColor:"white",padding:"20px"}}>
      {
		useEcharts(option)
	  }
    </div>
  )
})

export default Pie