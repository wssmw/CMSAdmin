import React, { memo } from 'react'

const NotFound = () => {
  return (
    <div style={{width:"100%", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <img style={{width:"20%", margin:"50px"}} src='/img/404.jpg'/>
      <h2>你的页面走丢啦~</h2>
    </div>
  )
}

export default NotFound