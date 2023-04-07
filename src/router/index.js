import {createBrowserRouter} from "react-router-dom";
import Layout from '../layout/index'
import {lazy} from "react";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true,Component:lazy(()=>import('../views/home'))},
            {path:'/entire',Component:lazy(()=>import('../views/entire'))},
            {path:'/detail',Component:lazy(()=>import('../views/detail'))},

        ]
    }
])
export default router