import React, {memo} from 'react';
import SectionHeader from "@c/SectionHeader";
import {SectionWrapper} from "@/views/home/components/HomeSection4/style";
import ScrollView from "@/base_ui/ScrollView";

const App = memo(({infoData={}}) => {
    return (
        <SectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <div className={'wrapper'}>
                    <ScrollView>
                        {infoData.list.map(item=>{
                            return (
                            <div className={'longfor-item'}>
                                <div className={'content'}>
                                    <img className={'cover'} src={item.picture_url}/>
                                    <div className='info'>
                                        <div className='city'>{item.city}</div>
                                        <div className='price'>均价 {item.price}</div>
                                    </div>
                                    <div className='bg'></div>
                                </div>

                            </div>
                            )
                        })}
                    </ScrollView>
            </div>
        </SectionWrapper>
    )
})

export default App