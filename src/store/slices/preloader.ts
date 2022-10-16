import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPreloaderState } from "../../models/states/preloaderState";

const initialState: IPreloaderState = {
  isDone: false,
  percentage: 0,
};
const preloaderSlice = createSlice({
  name: "preloaderSlice",
  initialState: initialState,
  reducers: {
    changeIsDone(state, action: PayloadAction<boolean>) {
      state.isDone = action.payload;
    },
    changePercentage(state, action: PayloadAction<number>) {
      state.percentage += action.payload;
    },
  },
});
export default preloaderSlice;
