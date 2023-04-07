import React, {memo} from 'react';
import {EntireList} from "@/views/entire/components/EntireList/style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Roomltem from "@c/Roomltem";
import {useNavigate} from "react-router-dom";
import {setDetail} from "@/store/modules/detail";

const App = memo(() => {
    const { list ,tobe} = useSelector(({ entire }) => entire, shallowEqual)
   const  navigator = useNavigate()
      const dispatch =  useDispatch()
    const enTclick  = (item)=>{
        navigator('/detail')
        dispatch(setDetail(item))
    }
    return (
        <EntireList>
            <h2 className='title'>{tobe}多处住所</h2>
            <div className={'list'}>
                {list.map(item=>{
                    return(
                        <Roomltem key={item.id} item={item} width={'20%'} enTclick={enTclick}/>
                    )
                })}
            </div>

        </EntireList>
    )
})
App.displayName = 'EntireList'

export default App