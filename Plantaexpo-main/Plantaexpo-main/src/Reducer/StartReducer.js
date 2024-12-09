import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

export const Sever = createAsyncThunk("chk", async () => {
  const response = await AxiosInstance.get("chk");
  return response.data;
});


export const SeverSlice = createSlice({
  name: "sever",
  initialState: {
    SeverInfo: {},
    SeverStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Sever.pending, (state, action) => {
        state.SeverStatus = "loading";
      })
      .addCase(Sever.fulfilled, (state, action) => {
        state.SeverStatus = "succeeded";
        state.SeverInfo = action.payload;
      })
      .addCase(Sever.rejected, (state, action) => {
        state.SeverStatus = "failed";
        console.log(action.error.message);
      });
  },
});

export default SeverSlice.reducer;
