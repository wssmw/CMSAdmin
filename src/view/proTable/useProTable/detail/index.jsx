import React, { memo, useEffect } from 'react'
import { getTableList } from '../../../../service/module/table'
import { Form } from 'antd'

const UseProTable = memo(() => {
  useEffect(()=>{
    getTableList().then(res=>{
      console.log(res,'res');
    })
  })
  return (
    <div>
      <div className="action">
      </div>
    </div>
  )
})

export default UseProTable