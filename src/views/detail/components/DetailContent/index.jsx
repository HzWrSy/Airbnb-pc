import React, {memo} from 'react';
import {DetailWrapper} from "@/views/detail/style";

const App = memo(() => {
    return (
        <DetailWrapper>
            <div>---详细内容---</div>
        </DetailWrapper>
    )
})
App.displayName='detail'

export default App