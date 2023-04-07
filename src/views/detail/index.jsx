import React, {memo} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import DetailContent from "@/views/detail/components/DetailContent";
import DetailPictures from "@/views/detail/components/DetailPictures";

const App = memo(() => {
    return (
        <DetailWrapper>
            <DetailPictures/>

           <DetailContent/>
        </DetailWrapper>
    )
})
App.displayName='detail'

export default App