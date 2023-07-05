import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  token: "",
  username: "",
  department: "",
  dob: "",
  joiningYear: "",
  contactNumber: "",
  isUserLogin: false,
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
      state.username = action.payload.userExist.username;
      state.department = action.payload.userExist.department;
      state.dob = action.payload.userExist.dob;
      state.joiningYear = action.payload.userExist.joiningYear;
      state.contactNumber = action.payload.userExist.contactNumber;
      state.token = action.payload.jwtToken;
      state.isUserLogin = true;
    },
    logoutUserDetais: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.avatar = "";
      state.token = "";
      state.username = "";
      state.department = "";
      state.dob = "";
      state.joiningYear = "";
      state.contactNumber = "";
    },
  },
});

export const { loginUserDetails, logoutUserDetais } = adminUserSlice.actions;
export default adminUserSlice.reducer;
