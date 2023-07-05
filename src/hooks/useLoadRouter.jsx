import { useEffect, useState } from 'react'
import defaultRoutes from '../router'
import { shallowEqual, useSelector } from 'react-redux'
import { handleMergeRoutes, mapMenusToRouter } from '../utils/setMenu'
export function useLoadRouter() {

  const [routes, setroutes] = useState(defaultRoutes)

  const { menu } = useSelector((state) => ({

    menu: state.login.menu

  }), shallowEqual)

  useEffect(() => {
    console.log("menu", menu);
    if (menu) {
      const newRoutes = mapMenusToRouter(menu)
      const router = handleMergeRoutes(routes, newRoutes)
      setroutes(router)
    }

  }, [menu])

  return routes
}