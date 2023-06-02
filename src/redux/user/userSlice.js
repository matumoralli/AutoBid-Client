import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  createdAt: "",
  email: "",
  id: "",
  isActive: false,
  isAdmin: false,
  name: "",
  password: "",
  updatedAt: "",
};

export const fetchUser = createAsyncThunk(
  "user/getUser",
  async ({ name, email }) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body:`{"action":"${API_ACTIONS.LOGIN_REGISTER_USER}", "payload":{"name":"${name}", "email":"${email}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with fetchUser:", error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = userSlice.actions;

export default userSlice.reducer;
