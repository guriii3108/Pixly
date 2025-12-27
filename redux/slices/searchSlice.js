import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
      query:"", //what user will search
      activeTab:"photos",
      results:[],
      loading:false,
      error:null
    },

    reducers:{
      setQuery:(state,action)=>{
        state.query = action.payload;
      },

      setActiveTab:(state,action)=>{
        state.activeTab = action.payload
      },

      setResults:(state,action)=>{
        state.results = action.payload 
        state.loading = false
      },

      setLoading:(state,action)=>{
        state.loading = true
        state.error = null //null because while loading what will be the error
      },

      setError:(state,action)=>{
        state.error = action.payload
        state.loading = false
      },
      clearResults:(state)=>{
        state.results = []
        state.loading = false
        state.error = null
      }     
    }
})

export const {setQuery,setActiveTab,setLoading,setError,setResults,clearResults} = searchSlice.actions;
export default searchSlice.reducer; 