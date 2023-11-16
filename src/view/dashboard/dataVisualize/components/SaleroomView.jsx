import { Card } from 'antd'
import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
import { useRef } from 'react';
import { useEcharts } from '../../../../hooks/useEcharts';
const SaleroomView = memo(() => {
  let option = {
		title: {},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
				label: {
					backgroundColor: "#6a7985"
				}
			}
		},
		legend: {
			right: "6%",
			top: "8%",
			data: ["当月销售额", "月均销售额"]
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: true, //坐标轴两边留白
				data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
			}
		],
		yAxis: [
			{
				name: "单位：元",
				type: "value",
				max: 1500, //最大值
				min: 0, //最小值
				interval: 300 //间隔
			}
		],
		series: [
			{
				name: "月均销售额",
				type: "line",
				areaStyle: {
					color: "#77c9ff"
				},
				emphasis: {
					focus: "series"
				},
				data: [720, 832, 801, 934, 890, 930, 1260, 1176, 1232, 1261, 1304, 1353]
			},
			{
				name: "当月销售额",
				type: "line",
				areaStyle: {
					color: "#78d8d8"
				},
				emphasis: {
					focus: "series"
				},
				data: [620, 632, 701, 634, 790, 830, 860, 876, 932, 951, 1104, 1135]
			}
		]
	};
//   useEffect(()=>{
// 	setTimeout(()=>{
// 		let myEcharts = echarts.init(echartRef.current)	
//     	myEcharts.setOption(option)
// 	},20)
    
//   },[])
  return (
    <div>
      <Card title="销售额">
		<div style={{width:'100%',height:'300px'}}>
			{
				useEcharts(option)
			}
		</div>
      </Card>
    </div>
  )
})

export default SaleroomView