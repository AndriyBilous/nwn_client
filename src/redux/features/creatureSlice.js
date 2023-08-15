import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  creatures: [],
  loading: false,
  showDescriptionButton: "",
};

export const getAllCreatures = createAsyncThunk(
  "creature/getAllCreatures",
  async () => {
    try {
      const { data } = await axios.get("/creature");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const creatureSlice = createSlice({
  name: "creature",
  initialState,
  reducers: {
    setShowDescriptionButton: (state, action) => {
      state.showDescriptionButton = action.payload;
    },
  },
  extraReducers: {
    // Get all posts
    [getAllCreatures.pending]: (state) => {
      state.loading = true;
    },
    [getAllCreatures.fulfilled]: (state, action) => {
      state.loading = false;
      state.creatures = action.payload.creatures;
    },
    [getAllCreatures.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// export const { setShowDescriptionButton } = createSlice.actions;
export default creatureSlice.reducer;
