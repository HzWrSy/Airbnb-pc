import React, {memo, Suspense} from 'react';
import {Outlet} from "react-router-dom";
import LayoutWrapper from "@/layout/style";
import AppHeader from "@/layout/components/AppHeader";
import AppFooter from "@/layout/components/AppFooter";
const App = memo(() => {
    return (
        <LayoutWrapper>
            <AppHeader/>
            <Suspense>
                <Outlet/>
            </Suspense>
            <AppFooter/>
        </LayoutWrapper>
    )
})

export default App