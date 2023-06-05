import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  loading: false,
  error: "",
  user: {}
};

export const fetchUser = createAsyncThunk(
  "user/getUser",
  async ({ name, email }) => {
    try {
      const response = await fetch("/api/usersApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.LOGIN_REGISTER_USER}", "payload":{"name":"${name}", "email":"${email}"}}`,
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
  extraReducers: (builder) =>
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload[0];
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.requestStatus;
      }),
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = userSlice.actions;

export default userSlice.reducer;
