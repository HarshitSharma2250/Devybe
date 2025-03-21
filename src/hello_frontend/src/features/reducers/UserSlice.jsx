import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthLoginThunk, UserAddCategoryThunk } from "../thunks/UserThunk";


const initialState = {
    error: null,
    loader:{},
tokens: JSON.parse(localStorage.getItem("tokens")) || [],
userCategory:[]
  };


//UserAddCategoryThunk

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
          localStorage.setItem("tokens",JSON.stringify(action.payload))
        })
        .addCase(AuthLoginThunk.rejected, (state, action) => {
            state.loader[AuthLoginThunk.pending] = false;
          state.error = action.payload 
        });
  
  
//user add category
builder
        .addCase(UserAddCategoryThunk.pending,(state) => {
            state.loader[UserAddCategoryThunk.pending] = true;
            state.error = null;
        })

        .addCase(UserAddCategoryThunk.fulfilled, (state, action) => {
            state.loader[UserAddCategoryThunk.pending] = false;
          state.error = null;
          state.userCategory = action.payload;

        })
        
        .addCase(UserAddCategoryThunk.rejected, (state, action) => {
            state.loader[UserAddCategoryThunk.pending] = false;
          state.error = action.payload 
        });
  
  
    },
  });
  

  export default AuthSlice.reducer;
  