import {configureStore} from "@reduxjs/toolkit"
import TabREducer from'./reducers/tab'

export default configureStore({
    reducer:{
        tab: TabREducer
    }
})