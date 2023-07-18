import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./features/locationSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
  },
});
