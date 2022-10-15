import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMark } from "../../models/IMark";
import { IMapState } from "../../models/states/mapState";
import marksService from "../../services/marksService";

const initialState: IMapState = {
  isEmpty: true,
  marks: [],
  newSelectedMark: null,
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
    setAllMarks(state, action: PayloadAction<IMark[]>) {
      state.marks = action.payload;
    },
    setNewSelectedMark(state, action: PayloadAction<IMark | null>) {
      state.newSelectedMark = action.payload;
    },
  },
});

export default mapSlice;
