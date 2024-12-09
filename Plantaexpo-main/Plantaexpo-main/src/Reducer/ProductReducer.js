import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";


export const Sanpham = createAsyncThunk("product/list", async () => {
  const response = await AxiosInstance.get("product/list");
  return response.data;
});

export const Timsanpham = createAsyncThunk("product/find", async (data) => {
  const response = await AxiosInstance.get(`product/find?name=${data}`);
  console.log(response.data);
  return response.data;
});

export const Sanphamdetail = createAsyncThunk("product/listdetail", async (data) => {
  const response = await AxiosInstance.get(`product/list?_id=${data}`);
  console.log(response.data);
  return response.data;
});

export const productSlice = createSlice({
  name: "list",
  initialState: {
    productData: {},
    productStatus: "idle",
    prroductfindData: {},
    prroductfindStatus: "idle",
    productdetailData: {},
    productdetailStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Sanpham.pending, (state, action) => {
        state.productStatus = "loading";
      })
      .addCase(Sanpham.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.productData = action.payload;
      })
      .addCase(Sanpham.rejected, (state, action) => {
        state.productStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(Timsanpham.pending, (state, action) => {
        state.prroductfindStatus = "loading";
      })
      .addCase(Timsanpham.fulfilled, (state, action) => {
        state.prroductfindStatus = "succeeded";
        state.prroductfindData = action.payload;
      })
      .addCase(Timsanpham.rejected, (state, action) => {
        state.prroductfindStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(Sanphamdetail.pending, (state, action) => {
        state.productdetailStatus = "loading";
      })
      .addCase(Sanphamdetail.fulfilled, (state, action) => {
        state.productdetailStatus = "succeeded";
        state.productdetailData = action.payload;
      })
      .addCase(Sanphamdetail.rejected, (state, action) => {
        state.productdetailStatus = "failed";
        console.log(action.error.message);
      });
  },
});

export default productSlice.reducer;
