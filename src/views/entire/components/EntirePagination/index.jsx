import React, {memo, useState} from 'react';
import {EntirPag} from "@/views/entire/components/EntirePagination/style";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getRoomListAction} from "@/store/modules/entire";

const App = memo(() => {
    const [current,setCurrent] = useState(1)
  const tobe =  useSelector(({entire})=>entire.tobe)
   const dispatch =  useDispatch()
    const aaa = 20 * (current - 1) + 1
    const bbb = current* 20
     const pageChange = (page) =>{
        setCurrent(page)
        dispatch(getRoomListAction(page - 1))
    }
    return (
        <EntirPag>
            <Pagination
                current={current}
                total={tobe}
                pageSize={20}
                showSizeChanger={false}
                onChange={pageChange}
            />
            <div className='info'>第 {aaa} - {bbb} 个房源, 共超过 {tobe} 个</div>

        </EntirPag>
    )
})

export default App