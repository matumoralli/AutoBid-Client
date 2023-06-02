import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await fetch("/api/user", {
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
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = usersSlice.actions;

export default usersSlice.reducer;
