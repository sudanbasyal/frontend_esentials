import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  city: "kathmandu",
  province: 3,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
   
  },
});

export const { changeCity, changeProvince } = userSlice.actions;
export default userSlice.reducer;
