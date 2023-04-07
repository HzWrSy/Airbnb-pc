import React, {memo, useState} from 'react';
import {EntireFilter} from "@/views/entire/components/EntireFilter/style";
import filterData from '@/assets/data/filter_data'
import classNames from "classnames";

const App = memo(() => {
    const [keys, setKeys] = useState([])
    const aka  = (item) =>{
       const a =  keys.slice()
        const index = a.indexOf(item)
        if (index !== -1) {
        a.splice(index,1)
        }else {
            a.push(item)
        }
        setKeys(a)
    }
    return (
        <EntireFilter>
            {filterData.map(item=>{
                return (
                    <div className={classNames('item',{active:keys.includes(item)})}
                    onClick={()=>aka(item)}
                         key={item}
                    >{item}</div>
                )
            })}
            <div>我是年八百</div>
        </EntireFilter>
    )
})

export default App