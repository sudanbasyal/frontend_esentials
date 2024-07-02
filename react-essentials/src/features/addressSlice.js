import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  city: "kathmandu",
  province: 3,
};

export const addressSlice = createSlice({
  name: "address",
  initialState: initialStateValue,
  reducers: {
    changeCity: (state, action) => {
      //   state = { name: "sudan", age: 23 };
      //   state.name = "ram";
      state.city = action.payload;
    },
    changeProvince: (state, action) => {
      state.province = action.payload;
    },
  },
});

export const { changeCity, changeProvince } = addressSlice.actions;
export default addressSlice.reducer;
