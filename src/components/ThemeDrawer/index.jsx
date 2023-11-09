import { Divider, Drawer, Tooltip } from 'antd'
import React, { memo } from 'react'
import { useEffect,useRef,useState } from 'react'
import { ThemeDrawerWrapper } from './style'
import { FireOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { changeDrawerVisibleAction } from '../../store/modules/theme'

const CountUp = memo((props) => {
    const { drawerVisible } = useSelector((state) => ({
        drawerVisible: state.theme.drawerVisible
      }))
      const dispatch = useDispatch();
      
    return (
    <ThemeDrawerWrapper>
        <Drawer width={300} title="布局设置" placement="right" open={drawerVisible} onClose={()=>dispatch(changeDrawerVisibleAction(false))}>
            <Divider style={{marginTop:'-5px'}} className='divider' plain><FireOutlined />风格设置</Divider>
            <div className='style_setting setting-drawer-block-checbox '>
                <Tooltip title={'亮色主题风格'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-light">
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon">
                            <check-outlined />
                        </span>
                    </div>
                </Tooltip>
                <Tooltip title={'亮色主题风格'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-light">
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon">
                            <check-outlined />
                        </span>
                    </div>
                </Tooltip>
                <Tooltip title={'亮色主题风格'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-light">
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon">
                            <check-outlined />
                        </span>
                    </div>
                </Tooltip>
            </div>
        </Drawer>
    </ThemeDrawerWrapper>
  )
})

export default CountUp