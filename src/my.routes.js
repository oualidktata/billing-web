import React from "react";
const ManageAccount= React.lazy(()=>import ("./views/Clients/Accounts/ManageAccount"));
const myRoutes=[
    {path:'/accounts/manage',name:'Manage Account', component:ManageAccount}
];
export default myRoutes;