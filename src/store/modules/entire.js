import {createSlice} from "@reduxjs/toolkit";
import {getEntireRoomList} from "@/api/modules/entire";
const EntireSlice = createSlice({
    name:'entire',
    initialState:{
        list:[],
        tobe:0
    },
    reducers:{
    setList(state,{payload}){
       state.list = payload
    },
    setTobe(state,{payload}){
        state.tobe = payload
        console.log(payload)
    }
    }

})
export const getRoomListAction = (page) => async (dispatch) =>{
    const res  =  await getEntireRoomList(page * 20 , 20)
    console.log(page * 20)
    dispatch(setList(res.list))
    dispatch(setTobe(res.totalCount))

}
export const {setList,setTobe} = EntireSlice.actions
export default EntireSlice.reducer
