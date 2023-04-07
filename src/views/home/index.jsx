import React, {memo, useEffect, useState} from 'react';
import {HomeWrapper} from "@/views/home/style";
import HomeBanner from '@/views/home/components/HomeBanner'
import HomeSection from '@/views/home/components/HomeSection'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getHomeDateAction} from "@/store/modules/home";
import HomeSection2 from "@/views/home/components/HomeSection2";
import HomeSection3 from "@/views/home/components/HomeSection3";
import {Skeleton} from "antd";
import HomeSection4 from "@/views/home/components/HomeSection4";
import {setHeaderConfig} from "@/store/modules/global";

const App = memo(() => {
   const {good,high,discount,hot,plus,longfor,isLoading} = useSelector(({home})=>home,shallowEqual)
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getHomeDateAction())
        dispatch(setHeaderConfig({ isFixed: false }))
    },[dispatch])
    return (
        <HomeWrapper>
          <HomeBanner/>
            <div className={'content'}>
                <Skeleton
                    className='skeleton'
                    loading={isLoading}
                    active
                    paragraph={{ rows: 12 }}>
                    <HomeSection2 infoData={discount}/>
                    <HomeSection2 infoData={hot}/>
                    <HomeSection4 infoData={longfor}/>
                    <HomeSection infoData={good} />
                    <HomeSection infoData={high}/>
                    <HomeSection3 infoData={plus}/>
                </Skeleton>

            </div>
        </HomeWrapper>
    )
})
App.displayName='Home'
export default App