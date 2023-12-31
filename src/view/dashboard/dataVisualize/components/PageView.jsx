import { Card } from 'antd'
import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
const PageView = memo(() => {
  let option = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			}
		},
		grid: {
			left: "10px",
			bottom: "10px",
      right:'10px',
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				axisTick: { show: true },
				axisLabel: {
					interval: "auto",
					lineHeight: 22,
					fontSize: 14,
					color: "#6E7079",
					margin: 10
				},
				axisLine: {
					// 轴线
					lineStyle: {
						color: "#e0e0e0"
					}
				},
				data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
			}
		],
		yAxis: [
			{
				type: "value",
				max: 15000, //最大值
				min: 0, //最小值
				interval: 3000, //间隔
				// 修改y轴分割线
				splitLine: {
					lineStyle: {
						color: "#e6e6e6",
						type: "dashed"
					}
				}
			}
		],
		series: [
			{
				type: "bar",
				barWidth: 35,
				emphasis: {
					focus: "series"
				},
				data: [10250, 8600, 9420, 7250, 6860, 8420, 13250, 8950, 4920, 11850, 9680, 5620],
				itemStyle: {
					color: "#0091ff"
				}
			}
		]
	};
  useEffect(()=>{
    let myEcharts = echarts.init(document.querySelector('.Page_main'))
    myEcharts.setOption(option)
    return () => {
      myEcharts.dispose()
    }
  })
  return (
    <div>
      <Card title="访问量">
        <div className="Page_main" style={{width:"100%",height:"350px"}}></div>
      </Card>
    </div>
  )
})

export default PageView