import { Menu } from 'antd'
import  { createElement,memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LeftWrapper } from './style'
import * as Icon from '@ant-design/icons/lib'
import { useNavigate } from 'react-router'
import { changeTabsAction } from '../../../store/modules/main'
const Left = memo((props) => {
  const navgete = useNavigate()
  const dispatch = useDispatch()
  const {menu,tabs} = useSelector((state)=>({
    menu:state.login.menu,
    tabs:state.main.tabs
  }))
  function getItem(menu) {
    let Item = []
    for(const item of menu) {
      let s = {}
      s.key = item.path
      s.icon = createElement(Icon[item.meta.icon])
      s.label = item.meta.title
      if(item.children!=undefined){
        s.children = getItem(item.children)
      }
      if(item.name=='embedded'){
        s.icon = createElement(Icon["ChromeFilled"])
      }
      Item.push(s)
    }
    return Item
  }
  const items = getItem(menu)
  const getTabs = (path,menu) =>{
    let goal = {}
    // debugger
    for(const item of menu){
      if(!path.includes(item.path)){
        continue
      }
      if(path==item.path){
        goal = item
      }
      if(item.children&&item.children.length!=0){
        goal = getTabs(path,item.children)
      }
    }
    return goal
  }
  const menuClick = (e) =>{
    const goal = getTabs(e.key,menu)
    console.log("goal",goal);
    // let 
    let newtabs = [...tabs]
    let tab = {}
    tab.key = e.key
    tab.label = (
      <div>
        {createElement(Icon[goal.meta.icon])}
        {goal.meta.title}
      </div>
    )
    newtabs.push(tab)
    dispatch(changeTabsAction(newtabs))
    navgete(e.key)
  }
  return (
    <LeftWrapper>
      <div className="logo">
        <img src="/img/logo.jpg" alt="" />
        {!props.collapsed&&<div className='dec'>Admin</div>}
      </div>
      <div className="scroll">
        <Menu items={items} mode='inline' onClick={(e)=>menuClick(e)}/>
      </div>
    </LeftWrapper>
  )
})

export default Left