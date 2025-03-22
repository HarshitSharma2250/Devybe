import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthLoginThunk } from "../thunks/UserThunk";


const initialState = {
    error: null,
    loader:{},
tokens: JSON.parse(localStorage.getItem("tokens")) || [],
  };


//UserAuth 

  const AuthSlice = createSlice({
    name: "authlogin",
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(AuthLoginThunk.pending,(state) => {
            state.loader[AuthLoginThunk.pending] = true;
            state.error = null;
        })
        .addCase(AuthLoginThunk.fulfilled, (state, action) => {
            state.loader[AuthLoginThunk.pending] = false;
          state.error = null;
          state.tokens = action.payload;
          localStorage.setItem("tokens",JSON.stringify((action.payload)))
        })
        .addCase(AuthLoginThunk.rejected, (state, action) => {
            state.loader[AuthLoginThunk.pending] = false;
          state.error = action.payload 
        });
  
  
  
  
    },
  });
  

  export default AuthSlice.reducer;
  