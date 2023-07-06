import { Alert } from 'antd'
import React, { memo, useRef } from 'react'
import Draggable from 'react-draggable';
const DragDirect = memo(() => {
  const divRef = useRef()
  return (
    <div ref={divRef} style={{height:"100%",backgroundColor:"white",padding:"20px"}}>
      <Alert type='info' message={"拖拽指令 🍇🍇🍇🍓🍓🍓"}/>
      <Draggable>
        <div style={{
        width:"200px",height:"200px",
        borderRadius:"20px",lineHeight:"200px",
        textAlign:"center",fontSize:"20px",
        backgroundColor:"#f0f5ff",
        cursor: "move",
        }}>
          我可以拖拽哦~
        </div>
      </Draggable>
    </div>
  )
})

export default DragDirect