import { ISidebarFormResponse } from "../responses/ISidebarFormReponse";

export interface ISidebarState {
  isOpened: boolean;
  response: ISidebarFormResponse | null;
  selectedAddress: string;
}
