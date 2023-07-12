import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  loading: false,
  error: "",
  carDetail: {},
};



export const carDetailSlice = createSlice({
  name: "carDetail",
  initialState,
  reducers: {},
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = carDetailSlice.actions;

export default carDetailSlice.reducer;
