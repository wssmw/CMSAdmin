import React, { memo } from 'react'

const Embedded = memo(() => {
  return (
    <div style={{width:"100%",height:"100%"}}>
      <iframe src="https://www.antdv.com/components/overview-cn" frameborder="0" style={{width:"100%",height:"100%"}}/>
    </div>
  )
})

export default Embedded