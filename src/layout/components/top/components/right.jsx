import { memo, useRef } from 'react'
import { RightWrapper } from './style'
import { Tabs, Badge, Dropdown, Popover, Empty } from 'antd'
import {
  BellOutlined, SkinOutlined
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { changeTokenAction } from '../../../../store/modules/login'
import cache from '../../../../utils/cache'
import Avatar from '../../../../components/Avatar'
import Language from '../../../../components/Language'
import ThemeSize from '../../../../components/ThemeSize'
import { changeDrawerVisibleAction } from '../../../../store/modules/theme'

const Right = memo(() => {
  const bellOutlinedRef = useRef()
  const dispatch = useDispatch()
  const message = [
    {
      key: '1',
      label: `通知(5)`,
      children:(
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      ),
    },
    {
      key: '2',
      label: `消息(0)`,
      children: <Empty description={"暂无消息"}/>,
    },
    {
      key: '3',
      label: `代办(0)`,
      children: <Empty description={"暂无代办"}/>,
    },
  ];
  
  const exit = (e)=>{
    console.log(e);
  }
  const onClick = ({key}) =>{
    if(key==3){
      cache.deleteCache('token')
      dispatch(changeTokenAction(''))
      // navgate('/login')
    }
  }
  // message部分
  const content = (
    <Tabs defaultActiveKey="1" items={message} onClick={exit}/>
  )

  return (
    <RightWrapper>
      <ThemeSize/>
      <Language/>
      <SkinOutlined style={{fontSize:'25px',margin:'0 10px'}} onClick={()=>dispatch(changeDrawerVisibleAction(true))}/>
      <Popover trigger="click" content={content}>
        <div style={{margin:'0 10px',display:'flex',alignItems:'center'}}>
          <Badge count={5}>
            <BellOutlined style={{ fontSize: "25px" }} ref={bellOutlinedRef}/>
          </Badge>
        </div>
      </Popover>
      <div className="name">WSS</div>
      <Avatar/>
    </RightWrapper>
  )
})
export default Right