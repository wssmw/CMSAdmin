import { Alert, AutoComplete, Card,  Input,  } from 'antd'
import React, { createElement, memo, useState } from 'react'
import { iconList } from './data';
import * as Icon from '@ant-design/icons/lib'

const IconSelect = memo(() => {
  const [inputValue,setInputValue] = useState('')
  const options=[{
    label: <Card style={{margin:0,padding:0}}>
      {
        iconList.map((item) => (
          <Card.Grid style={{ width:"16.66%",fontSize:"20px" }} onClick={e=>itemClick(item)}>
            {createElement(Icon[item])}
          </Card.Grid>
        ))
      }
    </Card>,
  }
  ];
  const itemClick = (icon) => { 
    setInputValue(icon)
  }
  return (
    <div style={{ height: "100%",textAlign:"center", backgroundColor: "white", padding: "20px" }}>
      <Alert type='info' message="图标选择器 🍓🍓🍓🍇🍇🍇" />
      <AutoComplete
        style={{
          width: 400,
          marginTop:'20px'
        }}
        value = {inputValue}
        options={options}
      >
      <Input   size="large" placeholder="请选择图标~" />

      </AutoComplete>

    </div>
  )
})

export default IconSelect