import React, {memo, useEffect, useRef, useState} from 'react';
import {ScrollWrapper} from "@/base_ui/ScrollView/style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const App = memo(({children}) => {
    const  [index,setIndex] =useState(0)
    const  [showRight,setShowRight] = useState(true)
    const  [showLeft,setShowLeft] = useState(false)
    const scrollRef = useRef()
    const scrollableWidth = useRef()
    useEffect(()=>{
      const clientWidth =  scrollRef.current.clientWidth
        const scrollWidth = scrollRef.current.scrollWidth
        scrollableWidth.current =scrollWidth - clientWidth
        setShowLeft(index > 0)
        setShowRight(scrollableWidth.current > 0)
    },[])
    function hd(isRight){
        const  aindex = isRight ? index + 1 : index -  1
        const bindex =  scrollRef.current.children[aindex]
        const  leftWidth =bindex.offsetLeft
        scrollRef.current.style.transform =`translateX(-${leftWidth}px)`
        console.log(leftWidth)
        setIndex(aindex)
        setShowLeft(aindex > 0 )
        setShowRight(scrollableWidth.current > leftWidth)
    }
    return (
        <ScrollWrapper>
            { showLeft && <div className={'control_btn left'} onClick={()=>hd()}>
                <IconArrowLeft />
            </div>}
            {showRight && <div className='control_btn right' onClick={()=>hd(true)}>
                <IconArrowRight />
            </div>}

            <div className='wrapper'>
                <div className='scroll-wrapper' ref={scrollRef}>
                    {children}
                </div>
            </div>
        </ScrollWrapper>
    )
})

export default App