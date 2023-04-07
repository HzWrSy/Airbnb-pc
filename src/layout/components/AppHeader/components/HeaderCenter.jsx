import React, {memo} from 'react';
import {CenterWrapper} from "@/layout/components/AppHeader/components/style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const App = memo(() => {
    return (
        <CenterWrapper>
          <div className={'search-bar'}>
              <div className={'text'}>搜索房源和体验</div>
                <div className={'icon'}>
                    <IconSearchBar/>
                </div>
          </div>
        </CenterWrapper>
    )
})

export default App