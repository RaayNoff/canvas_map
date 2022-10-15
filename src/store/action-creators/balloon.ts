import { AppDispatch } from "..";
import balloonSlice from "../slices/balloon";

export const changeBalloonData =
  (title: string, description: string) => (dispatch: AppDispatch) => {
    dispatch(
      balloonSlice.actions.changeData({
        title: title,
        desc: description,
      })
    );
  };

export const eraseData = () => (dispatch: AppDispatch) => {
  dispatch(balloonSlice.actions.eraseData());
};

export const changeBalloonVisible =
  (condition: boolean) => (dispatch: AppDispatch) => {
    dispatch(balloonSlice.actions.changeVisible(condition));
  };

export const changeBalloonPosition =
  (top: number, left: number) => (dispatch: AppDispatch) => {
    dispatch(
      balloonSlice.actions.changePosition({ top: top - 70, left: left - 60 })
    );
  };
