import React, {memo, useEffect} from 'react';
import {SectionWrapper} from "@/views/home/components/HomeSection3/style";
import SectionHeader from "@c/SectionHeader";
import ScrollView from "@/base_ui/ScrollView";
import PropTypes from 'prop-types'
import Roomltem from "@c/Roomltem";
import SectionFooter from "@c/SectionFooter";

const App = memo(({infoData={}}) => {

    return (
        <SectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <div className='content'>
                <ScrollView>
                    {infoData.list.map((item) => (
                        <Roomltem key={item.id} item={item} width='20%'></Roomltem>
                    ))}
                </ScrollView>
            </div>
            <SectionFooter name={infoData.type} />
        </SectionWrapper>
    )
})
App.propTypes = {
    infoData: PropTypes.object.isRequired,
}
App.displayName = 'HomeSection3'

export default App