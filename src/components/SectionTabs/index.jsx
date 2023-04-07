import React, {memo, useState} from 'react';
import {TabsWrapper} from "@c/SectionTabs/style";
import classNames from "classnames";
import ScrollView from "@/base_ui/ScrollView";
import PropTypes from "prop-types";

const App = memo(({tabList=[],  tabChange }) => {
    const [Index,setIndex] = useState(0)
    const setNdx = (index) =>{
        setIndex(index)
        tabChange  &&  tabChange(index)
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {tabList.map((item,index)=>{
                    return(
                        <div className={classNames('item',{active:index === Index})}
                             key={item}
                             onClick={()=>setNdx(index)}
                        >{item}</div>
                    )
                })}
            </ScrollView>
        </TabsWrapper>
    )
})

export default App