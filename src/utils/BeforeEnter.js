//     //1.在路由数组中找当前页面路由的对应路由项
//  export   const fineRouter = (routes,path) => {
//       for(let val of routers) {
//           if(val.path===path) return val;
//           if(val.children) return fineRouter(val.children,path);
//       }
//       return null;
//   }



//   //2.路由守卫判断
// export  const judgeRouter = (location,navigate) => {
//       const {pathname} = location;
//       //2.1路由数组找路由项
//       const findRoute = fineRouter(routers,pathname);
//       //2.2没找到，说明没有这个路由，直接404
//       if(!findRoute) {
//           navigate("/404");
//           return ;
//       }
//       //2.3路由项如果有权限需求，进行逻辑验证
//       if(findRoute.auth) {
//           //用户未登陆，挑战登陆页面
//           if(!localStorage.getItem("token")) navigate("/login");
//       }
//   }