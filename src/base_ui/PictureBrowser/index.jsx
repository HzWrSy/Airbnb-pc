import React, {memo, useState} from 'react';
import {PicturesWrapper} from "@/base_ui/PictureBrowser/style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base_ui/Indicator";
import classNames from "classnames";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";

const App = memo(({imgList=[],clickH}) => {
    const [index2 ,setIndex2] = useState(0)
    const [show,setShow] = useState(true)
    const  changeIndex = (e)=>{
        let nindex = e ? index2 + 1 : index2 - 1
        if (nindex < 0 ) nindex = imgList.length - 1
        if (nindex > imgList.length - 1) nindex = 0
        setIndex2(nindex)
    }
    return (
        <PicturesWrapper>
            <div className={'top'}>
                <div className={'close-btn'} onClick={clickH}>
                    <IconClose/>
                </div>
            </div>
            <div className={'center'}>
                <div className={'control'}>
                    <div className={'btn left'} onClick={()=>changeIndex()}>
                        <IconArrowLeft width={'72'} height={'72'}/>
                    </div>
                    <div className={'btn right'} onClick={()=>changeIndex(true)}>
                        <IconArrowRight width={'72'} height={'72'}/>
                    </div>
                </div>
                <div className={'cover'}>
                    <img src={imgList[index2]}/>
                </div>
            </div>
            <div className={'bottom'}>
            <div className={'info'}>
                <div className={'desc'}>
                    <div className={'count'}>
                        <span>
                            {index2+1}/{imgList.length}
                        </span>
                        <span>room apartment图片{index2+1}</span>
                    </div>
                        <div className={'toggle'} onClick={()=>setShow(!setShow)}>
                            <span>{show ? '隐藏' : '显示'}照片列表</span>
                            {show ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                </div>
                    <div className={'list2'}>
                        {show && (
                            <Indicator current={index2}>
                                {  imgList.map((item,index)=>{
                                    return(
                                        <div className={classNames('item', {active: index2 === index})} key={item} onClick={()=>setIndex2(index)}>
                                            <img src={item}/>
                                        </div>
                                    )
                                })}
                            </Indicator>
                        )}
                    </div>
                </div>
            </div>
        </PicturesWrapper>
    )
})

export default App