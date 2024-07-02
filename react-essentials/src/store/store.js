import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../features/infoSlice";
import addressSlice from "../features/addressSlice";
import { userApi } from "../services/api/userService"; 

export const store = configureStore({
  reducer: {
    info: infoSlice,
    address: addressSlice,
    [userApi.reducerPath]: userApi.reducer, // Add reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // Add middleware
});
