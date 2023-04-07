import React, {memo} from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router/index";

const App = memo(() => {
    return <RouterProvider router={router}/>
})

export default App