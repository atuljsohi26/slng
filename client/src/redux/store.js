import { configureStore } from "@reduxjs/toolkit";
import adminUserSlice from "./adminUserSlice";

const store = configureStore({
  reducer: {
    loginUser: adminUserSlice,
  },
});

export default store;
