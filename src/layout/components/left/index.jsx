import { Menu } from 'antd'
import  { createElement,memo } from 'react'
import { useSelector } from 'react-redux'
import { LeftWrapper } from './style'
import * as Icon from '@ant-design/icons/lib'
import { useNavigate } from 'react-router'
const Left = memo((props) => {
  const navgete = useNavigate()
  const {menu} = useSelector((state)=>({
    menu:state.login.menu
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
  console.log(menu);
  const menuClick = (e) =>{
    navgete(e.key)
    console.log(e);
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