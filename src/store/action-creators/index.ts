import * as MapActions from "./map";
import * as PreloaderActions from "./preloader";
import * as SidebarActions from "./sidebar";

export default {
  ...MapActions,
  ...PreloaderActions,
  ...SidebarActions,
};
