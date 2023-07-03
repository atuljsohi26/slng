import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  token: "",
};

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState,
  reducers: {
    loginUserDetails: (state, action) => {
      state._id = action.payload.userExist._id;
      state.name = action.payload.userExist.name;
      state.email = action.payload.userExist.email;
      state.avatar = action.payload.userExist.avatar;
      state.token = action.payload.jwtToken;
    },
  },
});

export const { loginUserDetails } = adminUserSlice.actions;
export default adminUserSlice.reducer;
