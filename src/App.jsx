import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { AppWrapper } from "./style";
import { useEffect } from "react";
import {useLoadRouter} from "./hooks/useLoadRouter";
import cache from "./utils/cache";

function App() {
    const routes = useLoadRouter();
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
    return (
      <AppWrapper>
        {useRoutes(routes)}
      </AppWrapper>
    );
}

export default App;
