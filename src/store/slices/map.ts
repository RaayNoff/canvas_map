import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMark } from "../../models/IMark";
import { IMapState } from "../../models/states/mapState";
import marksService from "../../services/marksService";

const initialState: IMapState = {
  isEmpty: true,
  marks: [],
};

const mapSlice = createSlice({
  name: "mapSlice",
  initialState: initialState,
  reducers: {
    changeEmpty(state, action: PayloadAction<boolean>) {
      state.isEmpty = action.payload;
    },
    addNewMark(state, action: PayloadAction<IMark>) {
      state.marks = state.marks.concat(action.payload);
    },
    getAllMarks(state, action: PayloadAction<IMark[]>) {
      state.marks = action.payload;
    },
  },
});

export default mapSlice;
