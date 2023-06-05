import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await fetch("/api/usersApi", {
      method: "POST",
      body: `{"action":"${API_ACTIONS.GET_ALL_USERS}"}`,
    });
    return await response.json();
  } catch (error) {
    console.log("There has been a problem with fetchUsers", error.message);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.requestStatus;
      }),
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = usersSlice.actions;

export default usersSlice.reducer;
