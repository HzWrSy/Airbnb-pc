import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import globalReducer from './modules/global'
import detailReducer from './modules/detail'


// 配置store仓库
const store = configureStore({
    reducer: {
        home: homeReducer,
        entire:entireReducer,
        global:globalReducer,
        detail:detailReducer
    },
})

export default store

