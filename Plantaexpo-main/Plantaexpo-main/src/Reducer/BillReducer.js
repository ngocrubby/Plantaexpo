import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const Lichsumua = createAsyncThunk("bill/list", async (data) => {
  const response = await AxiosInstance.get(`bill/list?iduser=${data}`);
  return response.data;
});

export const addlichsu = createAsyncThunk("bill/add", async (data) => {
  const response = await AxiosInstance.post("bill/add", data);
  return response.data;
});


export const billListSlice = createSlice({
  name: "cartlist",
  initialState: {
    billlistData: {},
    billlistStatus: "idle",
    billAddData: {},
    billAddStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Lichsumua.pending, (state, action) => {
        state.billlistStatus = "loading";
      })
      .addCase(Lichsumua.fulfilled, (state, action) => {
        state.billlistStatus = "succeeded";
        state.billlistData = action.payload;
      })
      .addCase(Lichsumua.rejected, (state, action) => {
        state.billlistStatus = "failed";
        console.log(action.error.message);
      })
      .addCase(addlichsu.pending, (state, action) => {
        state.billAddStatus = "loading";
      })
      .addCase(addlichsu.fulfilled, (state, action) => {
        state.billAddStatus = "succeeded";
        state.billAddData = action.payload;
      })
      .addCase(addlichsu.rejected, (state, action) => {
        state.billAddStatus = "failed";
        console.log(action.error.message);
      })
  },
});

export default billListSlice.reducer;
