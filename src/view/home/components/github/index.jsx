import { Card } from 'antd'
import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts';


const Github = memo(() => {
  const mainRef = useRef()
  const pieData = [
    { value: 4524, name: "Gitee 访问量" },
    { value: 8616, name: "GitHub 访问量" }
  ];
  const option = {
		title: {
			text: "Gitee / GitHub",
			subtext: "访问占比",
			left: "56%",
			top: "45%",
			textAlign: "center",
			textStyle: {
				fontSize: 14,
				color: "#767676"
			},
			subtextStyle: {
				fontSize: 15,
				color: "#a1a1a1"
			}
		},
		tooltip: {
			trigger: "item"
		},
		legend: {
			top: "4%",
			left: "2%",
			orient: "vertical",
			icon: "circle", //图例形状
			align: "left",
			itemGap: 20,
			textStyle: {
				fontSize: 13,
				color: "#a1a1a1",
				fontWeight: 500
			},
			// formatter: function (name) {
			// 	let dataCopy = "";
			// 	for (let i = 0; i < data.length; i++) {
			// 		if (data[i].name == name && data[i].value >= 10000) {
			// 			dataCopy = (data[i].value / 10000).toFixed(2);
			// 			return name + "      " + dataCopy + "w";
			// 		} else if (data[i].name == name) {
			// 			dataCopy = data[i].value;
			// 			return name + "      " + dataCopy;
			// 		}
			// 	}
			// 	return "";
			// }
		},
		series: [
			{
				type: "pie",
				radius: ["70%", "40%"],
				center: ["57%", "52%"],
				silent: true,
				clockwise: true,
				startAngle: 150,
				data: pieData,
				labelLine: {
					length: 80,
					length2: 30,
					lineStyle: {
						width: 1
					}
				},
				label: {
					position: "outside",
					show: true,
					formatter: "{d}%",
					fontWeight: 400,
					fontSize: 19,
					color: "#a1a1a1"
				},
				color: [
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 0.5,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#feb791" // 0% 处的颜色
							},
							{
								offset: 1,
								color: "#fe8b4c" // 100% 处的颜色
							}
						]
					},
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 1,
						y2: 0.5,
						colorStops: [
							{
								offset: 0,
								color: "#b898fd" // 0% 处的颜色
							},
							{
								offset: 1,
								color: "#8347fd" // 100% 处的颜色
							}
						]
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
    <div>
      <Card title={"Gitee / GitHub 访问量占比"}>
        <div className="main" ref = {mainRef} style={{width:"500px",height:"350px"}}>
        </div>
      </Card>
    </div>
  )
})

export default Github