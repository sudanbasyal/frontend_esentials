import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "sudan",
  age: 23,
};

export const infoSlice = createSlice({
  name: "infoSlice",
  initialState: initialStateValue,
  reducers: {
    changeName: (state, action) => {
      //   state = { name: "sudan", age: 23 };
      //   state.name = "ram";
      state.name = action.payload;
    },
    changeAge: (state, action) => {
        state.age = action.payload;
    //   console.log(action);
    //   console.log(state.age);
    //   console.log(state.age);
    },
  },
});

export const { changeName, changeAge } = infoSlice.actions;
export default infoSlice.reducer;
