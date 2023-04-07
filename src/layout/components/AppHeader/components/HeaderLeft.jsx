import React, {memo} from 'react';
import {LeftWrapper} from "@/layout/components/AppHeader/components/style";
import Icon_logo from "@/assets/svg/icon_logo";

const App = memo(() => {
    return (
        <LeftWrapper>
            <div className={'header-left'}>
                <div className={'logo'}>
                    <Icon_logo/>
                </div>
            </div>
        </LeftWrapper>

    )
})

export default App