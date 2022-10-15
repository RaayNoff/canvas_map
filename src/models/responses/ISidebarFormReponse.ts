import { IDescription } from "../IDescription";
import { ITitle } from "../ITitle";

export interface ISidebarFormResponse {
  reference: {
    titles: ITitle[];
    descriptions: IDescription[];
  };
}
