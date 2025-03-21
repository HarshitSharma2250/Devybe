import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const AuthLoginThunk = createAsyncThunk(
  "/authlogin",
  async (data) => {
    console.log("check data in thunk",data);
    try {
      const res = await axios.post(
        `http://localhost:4100/user/register`,data
      );
      // toast("Wallet imported successfully.", "success");
console.log("check data in thunk",res.data);
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast("authorisation error", "error");
      } else if (error.response.status === 500) {
        toast("Enternal Server Error", "error");
      } else if (error.response.status === 400) {
        if (error?.response?.data?.data?.non_field_errors) {
          toast(error?.response?.data?.data?.non_field_errors[0],'error');
        } else {
          toast(
            error &&
              error?.response &&
              error?.response?.data &&
              error?.response?.data?.message,
              'error'
          );
        }
      }
    }
  }
);