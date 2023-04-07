import React, {memo} from 'react';
import {SectionHeader} from "@/components/SectionHeader/style";

const App = memo(({ title, subtitle }) => {
    return (
        <SectionHeader>
            <h2 className={'title'}>{title}</h2>
            {subtitle && <h3 className={'subtitle'}>{subtitle}</h3>}
        </SectionHeader>

    )
})
App.displayName = 'SectionHeader'

export default App