import { ConfigProvider, Divider, Switch, Tooltip } from 'antd'
import React, { memo } from 'react'
import { DrawerContentWrapper } from './style'
import { CheckOutlined, CrownOutlined, FireOutlined, QrcodeOutlined, SettingOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {   
    changeCollapsedMenuAction,
    changeBreadcrumbAction,
    changeBreadcrumbIconAction,
    changeIsHasTabsAction,
    changeIsHasTabsIconAction,
    changeFooterAction, 
    changeStyleSettingAction
} from '../../store/modules/theme'
const DrawerContent = memo((props) => {
    let colorList = [
        {
            color:'#2449ff',
            desc:'极客蓝(默认)'
        },
        {
            color:'#F5222D',
            desc:'薄暮'
        },
        {
            color:'#FA541C',
            desc:'火山'
        },
        {
            color:'#FAAD14',
            desc:'日暮'
        },
        {
            color:'#13C2C2',
            desc:'明青'
        },
        {
            color:'#52C41A',
            desc:'极光绿'
        },
        {
            color:'#1890FF',
            desc:'拂晓蓝'
        },
        {
            color:'#722ED1',
            desc:'酱紫'
        },
    ]
    const dispatch = useDispatch();
    const  collapsedMenu  = useSelector((state) => ( state.theme.collapsedMenu))
    const  breadcrumb  = useSelector((state) => ( state.theme.breadcrumb))
    const  breadcrumbIcon  = useSelector((state) => ( state.theme.breadcrumbIcon))
    const  isHasTabs  = useSelector((state) => ( state.theme.isHasTabs))
    const  isHasTabsIcon  = useSelector((state) => ( state.theme.isHasTabsIcon))
    const  footer  = useSelector((state) => ( state.theme.footer))
    const  styleSetting  = useSelector((state) => ( state.theme.styleSetting))
    const selectColor = () =>{
        alert(6)
        ConfigProvider.config({
            theme: {
                primaryColor: 'red'
            }
        });
    }
    return (
        <DrawerContentWrapper>
            <Divider className='divider' plain><FireOutlined />风格设置</Divider>
            <div className='style_setting setting-drawer-block-checbox'>
                <Tooltip title={'亮色主题风格'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-light" onClick={()=>{dispatch(changeStyleSettingAction('light'))}}>
                        <div className="inner"></div>
                        {
                            styleSetting=='light'&&<span className="anticon anticon-check select-icon">
                                <CheckOutlined />
                            </span>
                        }
                    </div>
                </Tooltip>
                <Tooltip title={'暗色主题风格'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-dark" onClick={()=>{dispatch(changeStyleSettingAction('dark'))}}>
                        <div className="inner"></div>
                        {
                            styleSetting=='dark'&&<span className="anticon anticon-check select-icon">
                                <CheckOutlined />
                            </span>
                        }
                        
                    </div>
                </Tooltip>
                <Tooltip title={'暗黑模式(暂不支持)'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-realDark">
                        <div className="inner"></div>
                        {
                            styleSetting=='realDark'&&<span className="anticon anticon-check select-icon">
                                <CheckOutlined />
                            </span>
                        }
                    </div>
                </Tooltip>
            </div>
            <Divider className='divider'><QrcodeOutlined />布局切换</Divider>
            <div className="setting-drawer-block-checbox layout-checbox">
                <Tooltip title={'侧边菜单布局'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-side">
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon">
                            <CheckOutlined />
                        </span>
                    </div>
                </Tooltip>
                <Tooltip title={'顶部菜单布局'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-top">
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon" >
                            <CheckOutlined />
                        </span>
                    </div>
                </Tooltip>
                <Tooltip title={'混合布局(暂不支持)'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-mix" >
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon" >
                            <CheckOutlined />
                        </span>
                    </div>
                </Tooltip>
                <Tooltip title={ '左侧混合布局(暂不支持)'}>
                    <div className="ant-gw-checkbox-item ant-gw-checkbox-item-left" >
                        <div className="inner"></div>
                        <span className="anticon anticon-check select-icon">
                            <CheckOutlined />
                        </span>
                    </div>
                </Tooltip>
            </div>
            <Divider className='divider'><CrownOutlined />全局主题</Divider>
            <div className="theme-item-vertical">
                {
                    colorList.map((item)=>{
                        return <Tooltip key={item.desc} title={item.desc}>
                            <div className="icon" style={{backgroundColor:item.color}} onClick={()=>selectColor()}>
                                <span className="select-icon">
                                    <CheckOutlined />
                                </span>
                            </div>
                            
                    </Tooltip>
                    })
                }
            </div>
            <div className="theme-item-Horizontal">
                <span>灰色模式</span>
                <Switch size='small'/>
            </div>
            <div className="theme-item-Horizontal">
                <span>灰色模式</span>
                <Switch size='small'/>
            </div>
            <Divider className='divider'><SettingOutlined />界面设置</Divider>
            <div className="theme-item-Horizontal">
                <span>折叠菜单</span>
                <Switch checked={collapsedMenu} size='small' onChange={(key)=>dispatch(changeCollapsedMenuAction(key))}/>
            </div>
            <div className="theme-item-Horizontal">
                <span>面包屑</span>
                <Switch checked={breadcrumb} size='small' onChange={(key)=>dispatch(changeBreadcrumbAction(key))}/>
            </div>
            <div className="theme-item-Horizontal">
                <span>面包屑图标</span>
                <Switch checked={breadcrumbIcon} size='small' onChange={(key)=>dispatch(changeBreadcrumbIconAction(key))}/>
            </div>
            <div className="theme-item-Horizontal">
                <span>标签栏</span>
                <Switch checked={isHasTabs} size='small' onChange={(key)=>dispatch(changeIsHasTabsAction(key))}/>
            </div>
            <div className="theme-item-Horizontal">
                <span>标签栏图标</span>
                <Switch checked={isHasTabsIcon} size='small' onChange={(key)=>dispatch(changeIsHasTabsIconAction(key))}/>
            </div>
            <div className="theme-item-Horizontal">
                <span>页脚</span>
                <Switch checked={footer} size='small' onChange={(key)=>dispatch(changeFooterAction(key))}/>
            </div>
        </DrawerContentWrapper>
    )
})

export default DrawerContent