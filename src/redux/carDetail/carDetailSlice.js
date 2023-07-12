import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  loading: false,
  error: "",
  carDetail: {},
};

export const createCarDetail = createAsyncThunk(
  "carDetail/createCarDetail",
  async ( formData ) => {
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/carDetailApi",
        {
          action: API_ACTIONS.CREATE_CAR_DETAIL,
          payload: formData,
        }
      );
    } catch (error) {
      console.log(
        "There has been a problem with createCarDetail:",
        error.message
      );
    }
  }
);

// `{"action":"${API_ACTIONS.CREATE_CAR_DETAIL}", "payload":{
//   "brand":"${newCarDetail.brand}",
//   "model":"${newCarDetail.model}",
//   "year":"${newCarDetail.year}",
//   "kilometers":"${newCarDetail.kilometers}",
//   "owner":"${newCarDetail.owner}",
//   "engine":"${newCarDetail.engine}",
//   "transmission":"${newCarDetail.transmission}",
//   "driveTrain":"${newCarDetail.driveTrain}",
//   "bodyType":"${newCarDetail.bodyType}",
//   "color":"${newCarDetail.color}",
//   "highlights":"${newCarDetail.highlights}",
//   "equipement":"${newCarDetail.equipement}",
//   "modifications":"${newCarDetail.modifications}",
//   "knownFlaws":"${newCarDetail.knownFlaws}",
//   "services":"${newCarDetail.services}",
//   "addedItems":"${newCarDetail.addedItems}",
//   "formData":"${formData}",
//   "email":"${newCarDetail.email}"}}`,

export const carDetailSlice = createSlice({
  name: "carDetail",
  initialState,
  reducers: {},
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = carDetailSlice.actions;

export default carDetailSlice.reducer;
