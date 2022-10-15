import { AppDispatch } from "..";
import preloaderSlice from "../slices/preloader";

export const changePreloadCondition =
  (condition: boolean) => (dispatch: AppDispatch) => {
    dispatch(preloaderSlice.actions.changeIsDone(condition));
  };

export const changePreloadPercentage =
  (percentage: number) => (dispatch: AppDispatch) => {
    dispatch(preloaderSlice.actions.changePercentage(percentage));
  };
