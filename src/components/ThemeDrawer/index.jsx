import { Divider, Drawer, Tooltip } from 'antd'
import React, { memo } from 'react'
import { useEffect,useRef,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDrawerVisibleAction } from '../../store/modules/theme'
import DrawerContent from '../DrawerContent'

const ThemeDrawer = memo((props) => {
    const  drawerVisible  = useSelector((state) => ( state.theme.drawerVisible))
    const dispatch = useDispatch();
      
    return (
    <div>
        <Drawer 
            width={300} 
            title="布局设置" 
            placement="right" 
            open={drawerVisible} 
            onClose={()=>dispatch(changeDrawerVisibleAction(false))}
            >
            <DrawerContent/>
        </Drawer>
    </div>
  )
})

export default ThemeDrawer