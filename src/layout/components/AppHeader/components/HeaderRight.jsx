import React, {memo, useEffect, useState} from 'react';
import {RightWrapper} from "@/layout/components/AppHeader/components/style";
import Icon_global from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const App = memo(() => {
     const [show,setShow ] = useState(false)
    useEffect(()=>{
        window.addEventListener('click',dj,true)
        function dj (){
            setShow(false)
        }
        return ()=>{
            window.removeEventListener('click',dj)
        }
    },[])

    const pua =(
        <div className='panel'>
            <div className='top'>
                <div className='item login'>注册</div>
                <div className='item'>登录</div>
            </div>
            <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
            </div>
        </div>
    )
    return (
        <RightWrapper>
                <div className={'btns'}>
                    <span className={'btn'}>登录</span>
                    <span className={'btn'}>注册</span>
                    <span className={'btn'}>
                        <Icon_global/>
                    </span>
                </div>
                <div className={'profile'} onClick={()=>setShow(true)}>
                    <IconMenu/>
                    <IconAvatar/>
                    {show && pua}
                </div>
        </RightWrapper>
    )
})

export default App