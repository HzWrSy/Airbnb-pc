import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo(({ children, current }) => {
    const scrollRef = useRef()
    useEffect(()=>{
      const next =   scrollRef.current.children[current]
        // 元素左边距离
        const leftWidth = next.offsetLeft
       const  clientW =  next.clientWidth
        const clientWidth = scrollRef.current.clientWidth
        const scrollWidth = scrollRef.current.scrollWidth
        const totalWidth = scrollWidth - clientWidth
        // 计算每次移动距离
        let width = leftWidth + clientW / 2 - clientWidth / 2
       if (width < 0 ) width = 0
        if (width > totalWidth) width = totalWidth
        scrollRef.current.style.transform=`translateX(-${width}px)`
    },[current])
    return (
        <IndicatorWrapper>
            <div className='content'>
                <div ref={scrollRef} className='wrapper'>
                    {children}
                </div>
            </div>
        </IndicatorWrapper>
    )
})

Indicator.displayName = 'Indicator'

export default Indicator
