import { AppDispatch } from "..";
import { IMark } from "../../models/IMark";
import marksService from "../../services/marksService";
import mapSlice from "../slices/map";

export const changeEmpty = (condition: boolean) => (dispatch: AppDispatch) => {
  dispatch(mapSlice.actions.changeEmpty(condition));
};

export const addNewMark = (mark: IMark) => (dispatch: AppDispatch) => {
  marksService.setMark(mark);

  dispatch(mapSlice.actions.addNewMark(mark));
  changeEmpty(false);
};

export const setMarksFromStorage = () => (dispatch: AppDispatch) => {
  const marks = marksService.getAll();

  dispatch(mapSlice.actions.setAllMarks(marks));
};

export const setNewSelectedMark =
  (mark: IMark | null = null) =>
  (dispatch: AppDispatch) => {
    dispatch(mapSlice.actions.setNewSelectedMark(mark));
  };
