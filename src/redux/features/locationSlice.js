import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../../utils/axios";

const initialState = {
  locations: [],
  loading: false,
};

export const getAllLocations = createAsyncThunk(
  "location/getAllLocations",
  async () => {
    try {
      const { data } = await axios.get("/location");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: {
    // Get all posts
    [getAllLocations.pending]: (state) => {
      state.loading = true;
    },
    [getAllLocations.fulfilled]: (state, action) => {
      state.loading = false;
      state.locations = action.payload.locations;
    },
    [getAllLocations.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default locationSlice.reducer;
