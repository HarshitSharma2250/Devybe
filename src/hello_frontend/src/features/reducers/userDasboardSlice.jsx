import { createSlice } from "@reduxjs/toolkit";
import { GetAllEventThunk, GetCategoryThunk, GetUserInfoThunk } from "../thunks/SystemDashboardthunk";


const initialState = {
    error: null,
    loader:{},
allCategories:[],
userInfo:[],
Events:[]
  };


//RegisterEventThunk

  const DashboardSlice = createSlice({
    name: "getcategory",
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(GetCategoryThunk.pending,(state) => {
            state.loader[GetCategoryThunk.pending] = true;
            state.error = null;
        })
        .addCase(GetCategoryThunk.fulfilled, (state, action) => {
            state.loader[GetCategoryThunk.pending] = false;
          state.error = null;
          state.allCategories = action.payload;
        })
        .addCase(GetCategoryThunk.rejected, (state, action) => {
            state.loader[GetCategoryThunk.pending] = false;
          state.error = action.payload 
        });
  
// user get info slice

builder
.addCase(GetUserInfoThunk.pending,(state) => {
    state.loader[GetUserInfoThunk.pending] = true;
    state.error = null;
})
.addCase(GetUserInfoThunk.fulfilled, (state, action) => {
    state.loader[GetUserInfoThunk.pending] = false;
  state.error = null;
  state.userInfo = action.payload;
})
.addCase(GetUserInfoThunk.rejected, (state, action) => {
    state.loader[GetUserInfoThunk.pending] = false;
  state.error = action.payload 
});


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
  