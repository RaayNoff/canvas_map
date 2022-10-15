import { AppDispatch } from "..";
import { IMark } from "../../models/IMark";
import marksService from "../../services/marksService";
import mapSlice from "../slices/map";

export const changeEmpty = (condition: boolean) => (dispatch: AppDispatch) => {
  dispatch(mapSlice.actions.changeEmpty(condition));
};

export const addNewMark = (data: IMark) => (dispatch: AppDispatch) => {
  dispatch(mapSlice.actions.addNewMark(data));
};

export const getAllMarks = () => (dispatch: AppDispatch) => {
  const marks = marksService.getAll();

  dispatch(mapSlice.actions.getAllMarks(marks));
};
