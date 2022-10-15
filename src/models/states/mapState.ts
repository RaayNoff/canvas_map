import { IMark } from "../IMark";

export interface IMapState {
  isEmpty: boolean;
  marks: IMark[];
  newSelectedMark: IMark | null;
}
