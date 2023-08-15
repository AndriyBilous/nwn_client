import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./features/locationSlice";
import creatureSlice from "./features/creatureSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
    creature: creatureSlice,
  },
});
