import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const Dangnhap = createAsyncThunk("user/login", async (data) => {
  const response = await AxiosInstance.post("user/login", data);
  return response.data;
});

export const ChinhSua = createAsyncThunk("user/update", async (data) => {
  const response = await AxiosInstance.post("user/update", data);
  return response.data;
});

export const DangKyTaiKhoan = createAsyncThunk("user/register", async (data) => {
  const response = await AxiosInstance.post("user/reg", data);
  return response.data;
});

export const TTuser = createAsyncThunk("user/list", async (data) => {
  const response = await AxiosInstance.get(`user/list?_id=${data}`);
  console.log(response.data);
  return response.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData: {},
    loginStatus: "idle",
    userUpdate: {},
    userUpdateStatus: "idle",
    registerData: {},
    registerStatus: "idle",
    userData: {},
    userStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Dangnhap.pending, (state, action) => {
        state.loginStatus = "loading";
      })
      .addCase(Dangnhap.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        state.loginData = action.payload;
      })
      .addCase(Dangnhap.rejected, (state, action) => {
        state.loginStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(ChinhSua.pending, (state, action) => {
        state.userUpdateStatus = "loading";
      })
      .addCase(ChinhSua.fulfilled, (state, action) => {
        state.userUpdateStatus = "succeeded";
        state.userUpdate = action.payload;
      })
      .addCase(ChinhSua.rejected, (state, action) => {
        state.userUpdateStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(DangKyTaiKhoan.pending, (state, action) => {
        state.registerStatus = "loading";
      })
      .addCase(DangKyTaiKhoan.fulfilled, (state, action) => {
        state.registerStatus = "succeeded";
        state.registerData = action.payload;
      })
      .addCase(DangKyTaiKhoan.rejected, (state, action) => {
        state.registerStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(TTuser.pending, (state, action) => {
        state.userStatus = "loading";
      })
      .addCase(TTuser.fulfilled, (state, action) => {
        state.userStatus = "succeeded";
        state.userData = action.payload;
      })
      .addCase(TTuser.rejected, (state, action) => {
        state.userStatus = "failed";
        console.log(action.error.message);
      });
  },
});

export default loginSlice.reducer;
