import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { AppWrapper } from "./style";
import { createElement, useEffect } from "react";
import {useLoadRouter} from "./hooks/useLoadRouter";
import cache from "./utils/cache";
import { fetchHomeDataAction } from "./store/modules/login";
import { useDispatch, useSelector } from "react-redux";
import { changeTabsAction, changeTabsActiveKeyAction } from "./store/modules/main";
import * as Icon from '@ant-design/icons/lib'

function App() {
    const routes = useLoadRouter();
    const navgate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const {menu,tabs} = useSelector((state)=>({
      menu:state.login.menu,
      tabs:state.main.tabs,
    }))
    const getTabs = (path,menu) =>{
      console.log('path',path);
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
          if(goal!={})return goal
        }
      }
      return goal
    }
    const menuClick = (path) =>{
      console.log(menu);
      const goal = getTabs(path,menu)
      let newtabs = [...tabs]
      let tab = {}
      tab.key = path
      console.log(goal);
      tab.label = (
        <>
          {goal.meta.icon==='chromeOutlined'?createElement(Icon["ChromeFilled"]):createElement(Icon[goal.meta.icon])}
          {goal.meta.title}
        </>
      )
      let ishas = false
        for(const tab of newtabs){
        if(tab.key===path){
          ishas = true
          break
        }
      }
      if(!ishas){
        newtabs.push(tab)
      }
      dispatch(changeTabsAction(newtabs))
      dispatch(changeTabsActiveKeyAction(path))
    }
    useEffect(()=>{
        //路由守卫判断
        if(location.pathname!=='/login'&&cache.getCache('token')===null){
          navgate('/login') 
        }
        else {
          if(location.pathname==='/'){
            navgate('/home/index')
          }else {
            if(menu.length){
              menuClick(location.pathname)
            }
          }
        }
        dispatch(fetchHomeDataAction('1'))
      },[navgate,location])
      console.log('测试emoji')
  return (
    <AppWrapper>
      {useRoutes(routes)}
    </AppWrapper>
  );
}

export default App;
