import { createSlice } from "@reduxjs/toolkit";
import { GetAllEventThunk } from "../thunks/SystemDashboardthunk";


const initialState = {
    error: null,
    loader:{},
Events:[]
  };


//RegisterEventThunk

  const DashboardSlice = createSlice({
    name: "getcategory",
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {



// get all events
builder
.addCase(GetAllEventThunk.pending,(state) => {
    state.loader[GetAllEventThunk.pending] = true;
    state.error = null;
})
.addCase(GetAllEventThunk.fulfilled, (state, action) => {
    state.loader[GetAllEventThunk.pending] = false;
  state.error = null;
  state.Events = action.payload;
})
.addCase(GetAllEventThunk.rejected, (state, action) => {
    state.loader[GetAllEventThunk.pending] = false;
  state.error = action.payload 
});


    },
  });
  

  export default DashboardSlice.reducer;
  