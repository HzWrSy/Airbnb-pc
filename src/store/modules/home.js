// 首页模块Reducer
import { createSlice } from '@reduxjs/toolkit'
import {
    getHomeDiscountData,
    getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomeHotData,
    getHomeLongforData, getHomePlusData
} from "@/api/modules/home";

// 创建切片【模块】
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isLoading:true,
        good:{},
        high:{},
        hot:{},
        discount:{}
    },
    reducers: {
        setRoom(state, { payload }) {
            state.good = payload[0]
            state.high = payload[1]
            state.hot = payload[2]
            state.discount = payload[3]
            state.longfor = payload[4]
            state.plus = payload[5]

        },
        setLoading(state, { payload }) {
            state.isLoading = payload
        }
    },
})
    export const getHomeDateAction = () => async (dispatch) =>{
        dispatch(setLoading(true))
        const requestArr = [
        getHomeGoodPriceData(),
        getHomeHighScoreData(),
        getHomeHotData(),
        getHomeDiscountData(),
        getHomeLongforData(),
        getHomePlusData()
    ]
    const  res =  await Promise.all(requestArr)
    dispatch(setRoom(res))
        dispatch(setLoading(false))


    }

// 导出action
export const { setRoom ,setLoading } = homeSlice.actions


// 导出reducer
export default homeSlice.reducer

