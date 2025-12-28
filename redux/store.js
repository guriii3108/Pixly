import {configureStore} from "@reduxjs/toolkit"
import searchReducer from "./slices/searchSlice.js"
import collectionReducer from "./slices/collectionSlice.js"

const store = configureStore({
  reducer:{
    search:searchReducer,
    collection:collectionReducer
  }
})

export default store;