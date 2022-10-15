import axios from "axios";
import { AppDispatch } from "..";
import { ISidebarFormResponse } from "../../models/responses/ISidebarFormReponse";
import sidebarSlice from "../slices/sidebar";

export const fetchFormData = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<ISidebarFormResponse>(
      "https://run.mocky.io/v3/6102c1b2-254f-4b7c-addb-67d4df752866"
    );
    dispatch(sidebarSlice.actions.setResponse(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const setSidebarOpened =
  (condition: boolean) => (dispatch: AppDispatch) => {
    dispatch(sidebarSlice.actions.setSidebarOpened(condition));
  };
