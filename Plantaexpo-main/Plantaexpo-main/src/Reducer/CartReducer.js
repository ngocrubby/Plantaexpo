import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const DSGioHang = createAsyncThunk("cart/list", async (data) => {
  const response = await AxiosInstance.get(`cart/list?iduser=${data}`);
  return response.data;
});

export const DSGioHangAdd = createAsyncThunk("cart/add", async (data) => {
  const response = await AxiosInstance.post("cart/add", data);
  return response.data;
});

export const DSGioHangDel = createAsyncThunk("cart/del", async (data) => {
  const response = await AxiosInstance.post("cart/del", data);
  console.log(data);
  console.log(response.data);
  return response.data;
});

export const DSGioHangUpdate = createAsyncThunk("cart/update", async (data) => {
  const response = await AxiosInstance.post("cart/update", data);
  console.log(data);
  console.log(response.data);
  return response.data;
});

export const cartListSlice = createSlice({
  name: "cartlist",
  initialState: {
    cartlistData: {},
    cartlistStatus: "idle",
    cartDelData: {},
    cartDelStatus: "idle",
    cartAddData: {},
    cartAddStatus: "idle",
    cartUpdateData: {},
    cartUpdateStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DSGioHang.pending, (state, action) => {
        state.cartlistStatus = "loading";
      })
      .addCase(DSGioHang.fulfilled, (state, action) => {
        state.cartlistStatus = "succeeded";
        state.cartlistData = action.payload;
      })
      .addCase(DSGioHang.rejected, (state, action) => {
        state.cartlistStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(DSGioHangDel.pending, (state, action) => {
        state.cartDelStatus = "loading";
      })
      .addCase(DSGioHangDel.fulfilled, (state, action) => {
        state.cartDelStatus = "succeeded";
        state.cartDelData = action.payload;
      })
      .addCase(DSGioHangDel.rejected, (state, action) => {
        state.cartDelStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(DSGioHangAdd.pending, (state, action) => {
        state.cartAddStatus = "loading";
      })
      .addCase(DSGioHangAdd.fulfilled, (state, action) => {
        state.cartAddStatus = "succeeded";
        state.cartAddData = action.payload;
      })
      .addCase(DSGioHangAdd.rejected, (state, action) => {
        state.cartAddStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(DSGioHangUpdate.pending, (state, action) => {
        state.cartUpdateStatus = "loading";
      })
      .addCase(DSGioHangUpdate.fulfilled, (state, action) => {
        state.cartUpdateStatus = "succeeded";
        state.cartUpdateData = action.payload;
      })
      .addCase(DSGioHangUpdate.rejected, (state, action) => {
        state.cartUpdateStatus = "failed";
        console.log(action.error.message);
      });
  },
});

export default cartListSlice.reducer;
