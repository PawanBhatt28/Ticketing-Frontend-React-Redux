import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../feature/slice/ticketSlice";

const store = configureStore({
  reducer: ticketReducer,
});

export default store;
