import { FC } from "react";
import s from "./mainPage.module.scss";
import Map from "../../buisness/map/Map.component";
import Preloader from "../../preloader/Preloader.component";
import Sidebar from "../../buisness/sidebar/Sidebar.component";
import Balloon from "../../buisness/baloon/Balloon.component";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const MainPage: FC = () => {
  const { isOpened } = useTypedSelector((state) => state.sidebar);

  return (
    <>
      <Sidebar></Sidebar>
      <section className={`${s.main}`}>
        <div className={isOpened ? "container" : "container mg-auto"}>
          <Map></Map>
        </div>
      </section>
      <Preloader />
      <Balloon />
    </>
  );
};

export default MainPage;
