import { SettingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React, { memo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDrawerVisibleAction } from '../../store/modules/theme'
import { ThemeButtonWrapper } from './style'
const ThemeButton = memo((props) => {
    const [spinning,setSpinning] = useState(false)
    const dispatch = useDispatch();
    const openDrawer = () =>{
      dispatch(changeDrawerVisibleAction(true))
    }
    const  primary  = useSelector((state) => ( state.theme.primary))
  return (
    <ThemeButtonWrapper style={{backgroundColor:primary}} onClick={openDrawer} onMouseOver={()=>setSpinning(true)} onMouseOut={()=>setSpinning(false)}>

      {spinning?<Spin
        indicator={
            <SettingOutlined  
                style={{
                    fontSize: 14,
                    color:'white'
                }}
                spin
            />
      }>
      </Spin>:<SettingOutlined/>}
    </ThemeButtonWrapper>
  )
})

export default ThemeButton