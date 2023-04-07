import React, {memo, useEffect} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import {useSelector} from "react-redux";
import {PicturesWrapper} from "@/views/detail/components/DetailPictures/style";

const App = memo(() => {
    const { picture_urls = [] } = useSelector(({ detail }) => detail.roomDetail)
    return (
        <PicturesWrapper>
           <div className={'list'}>
                <div className={'left'}>
                <div className={'item'}>
                    <img src={picture_urls[0]} alt='' />
                    <div className={'mask'}></div>
                </div>
                </div>
                <div className={'right'}>
                    {picture_urls.slice(1,5).map((item)=>{
                        return(
                                <div className={'item'} key={item}>
                                    <img src={item}/>
                                    <div className='mask'></div>
                                </div>
                        )
                    })}
                </div>
           </div>
            <div className={'show-btn'}>显示照片</div>
        </PicturesWrapper>
    )
})
App.displayName='detail'

export default App