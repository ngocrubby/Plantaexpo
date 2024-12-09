import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const Loai = createAsyncThunk("category/list", async () => {
  const response = await AxiosInstance.get("category/list");
  return response.data;
});

export const categorySlice = createSlice({
  name: "register",
  initialState: {
    categoryData: {},
    categoryStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Loai.pending, (state, action) => {
        state.categoryStatus = "loading";
      })
      .addCase(Loai.fulfilled, (state, action) => {
        state.categoryStatus = "succeeded";
        state.categoryData = action.payload;
      })
      .addCase(Loai.rejected, (state, action) => {
        state.categoryStatus = "failed";
        console.log(action.error.message);
      });
  },
});
export default categorySlice.reducer;
