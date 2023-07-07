import { Card } from 'antd'
import React, { memo } from 'react'

const Item = memo((props) => {
  const {itemData} = props 
  return (
    <div>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between"}}> 
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img style={{width:"32px",height:"32px"}} src={`/icons/${itemData.icon}.svg`} alt="" />
            <span>{itemData.title}</span>
          </div>

          <div >
            {itemData.period}
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{fontSize:"26px", fontWeight:"600"}}>
            {itemData.value}
          </div>
          <div style={{display:"flex"}}>
            <span style={{height:"20px",margin:"0 2px",
            borderRadius:"5px",padding:"0 5px",fontSize:"10px",
            display:"flex",backgroundColor:itemData.isRise?'green':'red',
            color:"white"}}>{itemData.change}</span>
            <img style={{width:"16px",height:"16px"}} src={`icons/${itemData.isRise?'rise':'decline'}.svg`}/>
          </div>
        </div>
      </Card>

    </div>
  )
})

export default Item