import defaultRoutes from '../router'
import { shallowEqual, useSelector } from 'react-redux'
import { handleMergeRoutes, mapMenusToRouter } from '../utils/setMenu'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cache from '../utils/cache'
export function useLoadRouter() {

  const  menu  = useSelector((state) => ( state.login.menu), shallowEqual)
  const newRoutes = mapMenusToRouter(menu)
  const router = handleMergeRoutes(defaultRoutes, newRoutes)
  const navgate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    //路由守卫判断
    if(location.pathname!=='/login'&&cache.getCache('token')===undefined){
      navgate('/login') 
    }
    else {
      if(location.pathname==='/'){
        navgate('/home/index')
      }
    }
},[navgate])
  return router
}