import React from "react";

const Login = React.lazy(()=>import('../view/login'))
const Layout = React.lazy(()=>import('../layout/index'))
const NotFound = React.lazy(()=>import('../view/NotFound/index'))
const routes = [
    {
        path:'/',
        element:<Layout/>,
        children:[]
    },
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'*',
        element:<NotFound/>
    }
]

export default routes