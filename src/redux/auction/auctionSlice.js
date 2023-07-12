import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ACTIONS } from "@/dictionary";

const initialState = {};

export const createAuction = createAsyncThunk(
  "auction/createAuction",
  async ({ carDetailId, userId, minPrice, sellerType, customEnd }) => {
    try {
      const response = await fetch("/api/auctionApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.CREATE_AUCTION}", "payload":{"carDetailId":"${carDetailId}", "userId":"${userId}", "minPrice":"${minPrice}",  "sellerType":"${sellerType}", "customEnd":"${customEnd}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with postComment:", error.message);
    }
  }
);

export const updateAuction = createAsyncThunk(
  "auction/createAuction",
  async ({ auctionId, carDetailId, userId, minPrice, sellerType, customEnd }) => {
    try {
      const response = await fetch("/api/auctionApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.UPDATE_AUCTION}", "payload":{"auctionId":"${auctionId}","carDetailId":"${carDetailId}", "userId":"${userId}", "minPrice":"${minPrice}",  "sellerType":"${sellerType}", "customEnd":"${customEnd}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with postComment:", error.message);
    }
  }
);

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

export const getAuction = createAsyncThunk(
  "auction/getAuction",
  async ({ auctionId }) => {
    try {
      const response = await fetch("/api/auctionApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.GET_AUCTION}", "payload":{"auctionId":"${auctionId}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with getAuction:", error.message);
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

export const postBid = createAsyncThunk(
  "auction/postBid",
  async ({ auctionId, userId, ammount }) => {
    try {
      const response = await fetch("/api/auctionApi", {
        method: "POST",
        body: `{"action":"${API_ACTIONS.POST_BID}", "payload":{"ammount":"${ammount}", "userId":"${userId}", "auctionId":"${auctionId}"}}`,
      });
      return await response.json();
    } catch (error) {
      console.log("There has been a problem with postBid:", error.message);
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
