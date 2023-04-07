import React, {memo} from 'react';

import HeaderRight from "@/layout/components/AppHeader/components/HeaderRight";
import HeaderLeft from "@/layout/components/AppHeader/components/HeaderLeft";
import HeaderCenter from "@/layout/components/AppHeader/components/HeaderCenter";
import {HeaderWrapper} from "@/layout/components/AppHeader/style";
import {shallowEqual, useSelector} from "react-redux";
import classNames from "classnames";
const App = memo(() => {
    const { isFixed } = useSelector(
        ({ global }) => global.headerConfig,
        shallowEqual
    )
    return (
        <HeaderWrapper className={classNames({ fixed: isFixed })}>
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </HeaderWrapper>
    )
})

export default App