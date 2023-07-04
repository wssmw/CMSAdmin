import React from "react";
import { Navigate } from "react-router";

// const Login = React.lazy(()=>import('../view/login'))
import Login from "../view/login";

const routes = [
    {
        path:'/',
        element:<Navigate to='/login'></Navigate>
    },
    {
        path:'/login',
        element:<Login/>,
    },
]

export default routes