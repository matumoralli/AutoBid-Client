import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {
  loading: false,
  error: "",
  user: {},
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

//! Función de admin. El usuario adquiere créditos a traves de la función "buyCredit"
export const giveUserCredit = createAsyncThunk(
  "user/giveUserCredit",
  async (email) => {
    try {
      const response = await fetch("/api/usersApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.GIVE_USER_CREDIT}", "payload":{"email":"${email}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log(
        "There has been a problem with giveUserCredit:",
        error.message
      );
    }
  }
);

export const buyCredit = createAsyncThunk("user/buyCredit", async ({userId}) => {
  try {
    const response = await fetch("/api/usersApi", {
      method: "POST",
      body: `{"action":"${API_ACTIONS.BUY_CREDIT}", "payload":{"userId":"${userId}"}}`,
    });
    return await response.json();
  } catch (error) {
    console.log("There has been a problem with buyCredit:", error.message);
  }
});

export const deleteUserCredit = createAsyncThunk(
  "user/deleteUserCredit",
  async (email) => {
    try {
      const response = await fetch("/api/usersApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.DELETE_USER_CREDIT}", "payload":{"email":"${email}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log(
        "There has been a problem with deleteUserCredit:",
        error.message
      );
    }
  }
);

export const assignAuctionCredit = createAsyncThunk(
  "user/assignAuctionCredit",
  async ({ email, auctionId }) => {
    try {
      const response = await fetch("/api/usersApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.ASSIGN_AUCTION_CREDIT}", "payload":{"email":"${email}", "auctionId":"${auctionId}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log(
        "There has been a problem with assignAuctionCredit:",
        error.message
      );
    }
  }
);

export const removeAuctionCredit = createAsyncThunk(
  "user/removeAuctionCredit",
  async ({ email, auctionId }) => {
    try {
      const response = await fetch("/api/usersApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.REMOVE_AUCTION_CREDIT}", "payload":{"email":"${email}", "auctionId":"${auctionId}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log(
        "There has been a problem with removeAuctionCredit:",
        error.message
      );
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
