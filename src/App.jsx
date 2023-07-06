import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { AppWrapper } from "./style";
import { useEffect } from "react";
import {useLoadRouter} from "./hooks/useLoadRouter";
import cache from "./utils/cache";
import { fetchHomeDataAction } from "./store/modules/login";
import { useDispatch } from "react-redux";
// import { judgeRouter } from "./utils/BeforeEnter";

function App() {
    const routes = useLoadRouter();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    useEffect(()=>{
        //路由守卫判断
        if(location.pathname!='/login'&&cache.getCache('token')==null){
          navigate('/login')
        }
        dispatch(fetchHomeDataAction('1'))
      },[navigate,location])
  return (
    <AppWrapper>
      {useRoutes(routes)}
    </AppWrapper>
  );
}

export default App;
