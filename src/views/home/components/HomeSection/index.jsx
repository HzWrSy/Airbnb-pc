import React, {memo, useEffect} from 'react';
import {SectionWrapper} from "@/views/home/components/HomeSection/style";
import PropTypes from 'prop-types'
import SectionHeader from "@/components/SectionHeader";
import SectionFooter from "@c/SectionFooter";
import SectionList from "@c/SectionList";

const App = memo(({infoData={}}) => {
    useEffect(()=>{
        console.log(infoData)
    })
    return (
        <SectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionList list={infoData.list} width={'25%'}/>
            <SectionFooter/>
        </SectionWrapper>
    )
})
App.propTypes = {
    infoData: PropTypes.object.isRequired,
}
App.displayName = 'HomeSection'

export default App