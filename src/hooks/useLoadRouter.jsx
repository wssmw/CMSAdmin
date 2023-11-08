import defaultRoutes from '../router'
import { shallowEqual, useSelector } from 'react-redux'
import { handleMergeRoutes, mapMenusToRouter } from '../utils/setMenu'
export function useLoadRouter() {

  const { menu } = useSelector((state) => ({
    menu: state.login.menu
  }), shallowEqual)
  const newRoutes = mapMenusToRouter(menu)
  const router = handleMergeRoutes(defaultRoutes, newRoutes)

  return router
}