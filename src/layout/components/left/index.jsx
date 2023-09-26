import { Menu } from 'antd'
import  { createElement,memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LeftWrapper } from './style'
import * as Icon from '@ant-design/icons/lib'
import { useNavigate } from 'react-router-dom'

const Left = memo((props) => {
  const navgete = useNavigate()
  const dispatch = useDispatch()
  const {menu,tabsActivekey} = useSelector((state)=>({
    menu:state.login.menu,
    tabsActivekey:state.main.tabsActivekey
  }))
  // 获取menu的所需数据
  function getItem(menu) {
    let Item = []
    for(const item of menu) {
      let s = {}
      s.key = item.path
      s.icon = createElement(Icon[item.meta.icon])
      s.label = item.meta.title
      if(item.children!==undefined){
        s.children = getItem(item.children)
      }
      if(item.name==='embedded'){
        s.icon = createElement(Icon["ChromeFilled"])
      }
      Item.push(s)
    }
    return Item
  }
  const items = getItem(menu)
  // const menuClick = (e) =>{
  //   MenuToTabbar(e.key)
  // }
  const getTabs = (path,menu) =>{
    let goal = {}
    for(const item of menu){
      if(!path.includes(item.path)){
        continue
      }
      if(path===item.path){
        goal = item
      }
      if(item.children&&item.children.length!==0){
        goal = getTabs(path,item.children)
      }
    }
    return goal
  }
  const menuClick = (e) =>{
    navgete(e.key)
  }
  return (
    <LeftWrapper>
      <div className="logo">
        <img src="/img/logo.jpg" alt="" />
        {!props.collapsed&&<div className='dec'>Admin</div>}
      </div>
      <div className="scroll">
        <Menu items={items} mode='inline' onClick={(e)=>menuClick(e)} selectedKeys={[tabsActivekey]}/>
      </div>
    </LeftWrapper>
  )
})

export default Left
