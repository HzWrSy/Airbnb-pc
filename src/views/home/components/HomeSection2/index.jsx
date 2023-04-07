import React, {memo, useCallback, useEffect, useState} from 'react';
import {SectionWrapper} from "@/views/home/components/HomeSection2/style";
import SectionHeader from "@c/SectionHeader";
import SectionList from "@c/SectionList";
import SectionFooter from "@c/SectionFooter";
import SectionTabs from "@c/SectionTabs";

const App = memo(({infoData={}}) => {
    const [name, setName] = useState(infoData.dest_address[0].name)
   const  tabList =  infoData.dest_address.map(item=>item.name)
    const tabChange = useCallback((i)=>{setName(tabList[i])},[tabList])
    useEffect(()=>{
        console.log(tabList)
    })
    return (
        <SectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabList={tabList} tabChange={tabChange}/>
            <SectionList list={infoData.dest_list[name]} width="33.3333%" />
            <SectionFooter name={name} />
        </SectionWrapper>
    )
})

export default App