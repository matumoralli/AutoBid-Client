import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {};

export const postComment = createAsyncThunk(
  "auction/postComment",
  async ({ auctionId, userId, comment }) => {
    try {
      const response = await fetch("/api/auctionApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.POST_COMMENT}", "payload":{"auctionId":"${auctionId}", "userId":"${userId}", "comment":"${comment}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with postComment:", error.message);
    }
  }
);

export const postReply = createAsyncThunk(
  "auction/postReply",
  async ({ commentId, userId, reply }) => {
    try {
      const response = await fetch("/api/auctionApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.POST_REPLY}", "payload":{"commentId":"${commentId}", "userId":"${userId}", "reply":"${reply}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with postReply:", error.message);
    }
  }
);

export const auctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {},
});

//* Action creators are generated for each case reducer function. Import these actions to use in your component.
export const {} = auctionSlice.actions;

export default auctionSlice.reducer;
