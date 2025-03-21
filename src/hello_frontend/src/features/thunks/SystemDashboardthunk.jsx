import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../Axios/AxiosInstance";
import toast from "react-hot-toast";




// get category thubnk
export const GetCategoryThunk = createAsyncThunk(
  "/getcategory",
  async () => {
    try {
      const res = await axiosInstance.get(
        `http://localhost:4100/user/categories`
      );

      return res.data.data;
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




// get user info thunk
export const GetUserInfoThunk=createAsyncThunk(
    "/userinfo",
    async()=>{
        try {
            const res=await axiosInstance.get(`http://localhost:4100/user/`)
            res.data
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
)




//get all events thunk
export const GetAllEventThunk=createAsyncThunk(
    "/allevents",
    async()=>{
        try {
           const res=await axiosInstance.get(`http://localhost:4100/user/events`)
return res.data?.data
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
)


// register events thunk
export const RegisterEventThunk=createAsyncThunk(
  "/registerevent",
  async(data)=>{
      try {
         const res=await axiosInstance.patch(`http://localhost:4100/user/events`,data)
         toast.success("Event registered successfully")
return res.data?.data
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
)