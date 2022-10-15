import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISidebarFormResponse } from "../../models/responses/ISidebarFormReponse";
import { ISidebarState } from "../../models/states/sidebarState";

const initialState: ISidebarState = {
  isOpened: false,
  response: null,
  selectedAddress: "",
};

const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: initialState,
  reducers: {
    setResponse(state, action: PayloadAction<ISidebarFormResponse>) {
      state.response = action.payload;
    },
    setSidebarOpened(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
    setSelectedAddress(state, action: PayloadAction<string>) {
      state.selectedAddress = action.payload;
    },
  },
});

export default sidebarSlice;
