import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import totalimg from '../images/total.png'
const RealTimeAccessChart = memo((props) => {
  const num = "216908";
  const mainRef = useRef()
 
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