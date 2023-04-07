import React, {memo, useEffect, useState} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import {useSelector} from "react-redux";
import {PicturesWrapper} from "@/views/detail/components/DetailPictures/style";
import PictureBrowser from "@/base_ui/PictureBrowser";

const App = memo(() => {
      const [show,setShow] =  useState(false)
    const { picture_urls = [] } = useSelector(({ detail }) => detail.roomDetail)
    const showPre = ()=>{
          setShow(true)
        document.querySelector('body').style.overflow = 'hidden'
    }
    const hidePre = () =>{

          setShow(false)
        document.querySelector('body').style.overflow = 'auto'

    }
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
            <div className={'show-btn'} onClick={showPre}>显示照片</div>
            {show && <PictureBrowser imgList={picture_urls} clickH={hidePre}/>}
        </PicturesWrapper>
    )
})
App.displayName='detail'

export default App