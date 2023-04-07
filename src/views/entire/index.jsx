import React, {memo, useEffect} from 'react';
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/components/EntireFilter";
import EntireList from "@/views/entire/components/EntireList";
import EntirePagination from "@/views/entire/components/EntirePagination";
import {useDispatch} from "react-redux";
import {getRoomListAction} from "@/store/modules/entire";
import { setHeaderConfig } from '@/store/modules/global'


const App = memo(() => {
      const  dispatch =   useDispatch()
    useEffect(()=>{
        dispatch(setHeaderConfig({isFixed:true}))
        dispatch(getRoomListAction())

    },[dispatch])
    return (
        <EntireWrapper>
           <EntireFilter/>
            <EntireList/>
            <EntirePagination/>
        </EntireWrapper>
    )
})
App.displayName='entire'

export default App