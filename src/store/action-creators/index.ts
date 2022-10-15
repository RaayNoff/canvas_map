import * as MapActions from "./map";
import * as PreloaderActions from "./preloader";
import * as SidebarActions from "./sidebar";
import * as BalloonActions from "./balloon";

export default {
  ...MapActions,
  ...PreloaderActions,
  ...SidebarActions,
  ...BalloonActions,
};
