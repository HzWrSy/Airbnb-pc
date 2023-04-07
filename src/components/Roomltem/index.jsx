import React, {memo, useRef, useState} from 'react';
import { RoomWrapper } from './style'
import {Calendar, Carousel, Rate} from "antd";
import Indicator from "@/base_ui/Indicator";
import classNames from "classnames";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const App = memo(({item,width='25%',enTclick}) => {
    const [zindex,setZindex] = useState(0)
    const sliderRef = useRef()
    const changeSlider = (isS,e) =>{
        isS ? sliderRef.current.next() : sliderRef.current.prev()
        e.stopPropagation()
    }
    const SlideEl =(
        <div className={'slider'}>
            {/*{按钮}*/}
            <div className={'control'}>
                <div className={'left'} onClick={(e)=>changeSlider(false,e)}>
                <IconArrowLeft width={'18'} height={'18'}/>
                </div>
                <div className={'right'} onClick={(e)=>changeSlider(true,e)}>
                    <IconArrowRight width={'18'} height={'18'}/>
                </div>
            </div>
            {/*{指示器}*/}
        <div className={'indicator'}>
            <Indicator current={zindex}>
                {item.picture_urls?.map((item,index) =>{
                    return(
                    <div className={classNames('item',{active:zindex === index})} key={item}>
                        <div className={'dot'}></div>
                    </div>
                    )
                })}
            </Indicator>
        </div>
            {/*{走马灯}*/}
        <Carousel
            ref={sliderRef}
            dots={false}
            beforeChange={(form,to)=>setZindex(to)}
        >
            {item.picture_urls?.map(item=>{
                return(
                    <div className={'cover'} key={item}>
                        <img src={item}/>
                    </div>
                )
            })}
        </Carousel>
        </div>
        )
    const PictureEl = (
        <div className='cover'>
            <img src={item.picture_url} alt='' />
        </div>
    )
        const goPage = ()=>{
        enTclick && enTclick(item)
    }
    return (
        <RoomWrapper  rateColor={item.star_rating_color} textColor={item.verify_info.text_color} width={width}>
            <div className={'content'} onClick={goPage}>
                {item.picture_urls ? SlideEl : PictureEl}
                <div className={'desc'}>{item.verify_info.messages.join('.')}</div>
                <div className={'name mle'}>{item.name}</div>
                <div className={'price'}>{item.price_format}/晚</div>
                <div className={'bottom'}>
                    <Rate
                        className={'rate'}
                        allowHalf
                        disabled
                        defaultValue={item.star_rating}
                    />
                    <span className={'count'}>{item.reviews_count}</span>
                    {item.bottom_info && ' · ' + item.bottom_info.content}
                </div>
            </div>
        </RoomWrapper>
    )
})

export default App