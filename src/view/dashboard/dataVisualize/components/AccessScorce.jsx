import { Card } from 'antd'
import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
import { useEcharts } from '../../../../hooks/useEcharts'
const AccessScorce = memo(() => {
  let option = {
		color: ["#59A2FE", "#FFB717", "#FC8F6B", "#70E07B", "#FBDA3D", "#11E5F1", "#E3A0FF"],
		title: {
			text: "访问来源",
			subtext: "全站来源统计",
			left: "center"
		},
		tooltip: {
			trigger: "item",
			backgroundColor: "#ffffff",
			formatter: function (params) {
				let str =
					"访问来源" +
					"</br>" +
					params.marker +
					"" +
					params.name +
					"</br>" +
					"数量：" +
					params.data.value +
					"</br>" +
					"占比：" +
					params.percent +
					"%";
				return str;
			}
		},
		legend: {
			orient: "vertical",
			itemWidth: 25,
			itemHeight: 15,
			left: "2%",
			align: "left",
			top: "2%",
			textStyle: {
				fontSize: 12,
				fontFamily: "PingFangSC-Regular, PingFang SC",
				fontWeight: 400,
				color: "#0D1134",
				lineHeight: 17
			}
		},
		grid: {
			right:'5',
			containLabel: true,
		  },
		series: [
			{
				type: "pie",
				radius: [0, 80],
				labelLine: {
					length: 20,
					length2: 30
				},

				label: {
					formatter: "{a|{b}}\n{per|{d}%}",
					rich: {
						a: {
							fontSize: 12,
							lineHeight: 16,
							align: "center"
						},
						per: {
							color: "#545454",
							align: "center",
							fontSize: 12,
							lineHeight: 16
						}
					}
				},

				data: [
					{ value: 5920, name: "抖音" },
					{ value: 2640, name: "快手" },
					{ value: 2125, name: "微博" },
					{ value: 1925, name: "虎牙" },
					{ value: 1220, name: "斗鱼" },
					{ value: 635, name: "人民日报" },
					{ value: 4638, name: "微信" }
				]
			}
		]
	};
  return (
    <div>
      <Card title="访问来源">
		<div style={{width:'100%',height:"300px"}}>
			{
				useEcharts(option)
			}
		</div>
        
      </Card>
    </div>
  )
})

export default AccessScorce