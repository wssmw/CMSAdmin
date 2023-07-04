import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { AppWrapper } from "./style";
import { useEffect } from "react";
import axios from 'axios'
import {useLoadRouter} from "./hooks/useLoadRouter";
import cache from "./utils/cache";
// import { judgeRouter } from "./utils/BeforeEnter";

function App() {
  // useEffect(() => {
    
  //   axios.get(' https://mock.mengxuegu.com/mock/64112a1afe77f949bc0d6ec6/guyue/guyue/menu/list',{
  //     headers:{
  //       "x-access-token":'bqddxxwqmfncffacvbpkuxvwvqrhln'
  //     }
  //   }).then((res)=>{
  //     console.log(res);
  //   })
  // }, [])
    const routes = useLoadRouter();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        //路由守卫判断
        if(location.pathname!='/login'&&cache.getCache('token')==null){
          navigate('/login')
        }
      },[navigate,location])
  return (
    <AppWrapper>
      {useRoutes(routes)}
    </AppWrapper>
  );
}

export default App;
