import { combineReducers } from "redux";
import balloonSlice from "./balloon";
import mapSlice from "./map";
import preloaderSlice from "./preloader";
import sidebarSlice from "./sidebar";

export const rootReducer = combineReducers({
  map: mapSlice.reducer,
  sidebar: sidebarSlice.reducer,
  preloader: preloaderSlice.reducer,
  balloon: balloonSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
