import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBalloonState } from "../../models/states/balloonState";

const initialState: IBalloonState = {
  isOpened: false,
  currentTitle: "",
  currentDescription: "",
  left: 0,
  top: 0,
  scrollTop: 0,
  scrollLeft: 0,
};

const balloonSlice = createSlice({
  name: "balloonSlice",
  initialState: initialState,
  reducers: {
    changeData(state, action: PayloadAction<{ desc: string; title: string }>) {
      state.currentDescription = action.payload.desc;
      state.currentTitle = action.payload.title;
    },
    eraseData(state) {
      state.currentDescription = "";
      state.currentTitle = "";
    },
    changeVisible(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
    changePosition(
      state,
      action: PayloadAction<{ top: number; left: number }>
    ) {
      state.top = action.payload.top;
      state.left = action.payload.left;
    },
    changeScroll(
      state,
      action: PayloadAction<{ scrollTop: number; scrollLeft: number }>
    ) {
      state.scrollTop = action.payload.scrollTop;
      state.scrollLeft = action.payload.scrollLeft;
    },
  },
});

export default balloonSlice;
