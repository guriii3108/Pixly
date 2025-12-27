const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name:"counter", //good practise to name slice
  initialState:{
    value:0
  },
  reducers:{ //functions
    increment:(state)=>{ //accept the state
      state.value+=1;
    },
    decrement:(state)=>{
      state.value-=1;
    },
  }
})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;