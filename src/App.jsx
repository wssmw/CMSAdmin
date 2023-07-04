import { useRoutes, NavLink } from "react-router-dom";
import routes from "./router";
import { Layout } from 'antd';
import { AppWrapper } from "./style";
import { useEffect } from "react";
import axios from 'axios'

const { Header, Sider, Content } = Layout;
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

  return (
    <AppWrapper>
      {useRoutes(routes)}
    </AppWrapper>
  );
}

export default App;
