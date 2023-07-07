import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
const Radar = memo(() => {
  let option = {
		title: {
			text: "基础雷达图"
		},
		tooltip: {},
		legend: {
			data: ["预算分配(Allocated Budget)", "实际开销(Actual Spending)"]
		},
		radar: {
			indicator: [
				{ name: "销售(sales)", max: 6500 },
				{ name: "管理(Administration)", max: 16000 },
				{ name: "信息技术(Information Techology)", max: 30000 },
				{ name: "客服(Customer Support)", max: 38000 },
				{ name: "研发(Development)", max: 52000 },
				{ name: "市场(Marketing)", max: 25000 }
			]
		},
		series: [
			{
				name: "预算 vs 开销(Budget vs spending)",
				type: "radar",
				// areaStyle: {normal: {}},
				data: [
					{
						value: [4300, 10000, 28000, 35000, 50000, 19000],
						name: "预算分配(Allocated Budget)"
					},
					{
						value: [5000, 14000, 28000, 31000, 42000, 21000],
						name: "实际开销(Actual Spending)"
					}
				]
			}
		]
	};
  useEffect(()=>{
    let myEcharts = echarts.init(document.querySelector('.main'))
    myEcharts.setOption(option)
    return () => {
      myEcharts.dispose()
    }
  })
  return (
    <div style={{height:"100%",backgroundColor:"white",padding:"20px"}}>
      <div className="main" style={{width:"100%",height:"100%"}}></div>
    </div>
  )
})

export default Radar