import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../Axios/AxiosInstance";
import toast from "react-hot-toast";





export const AuthLoginThunk = createAsyncThunk(
  "/authlogin",
  async (data) => {
    try {
      const res = await axiosInstance.post(
        `api/register`,data
      );
      toast.success("Register successfully");

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


