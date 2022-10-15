import { FC } from "react";
import s from "./mainPage.module.scss";
import Map from "../../buisness/map/Map.component";
import Preloader from "../../preloader/Preloader.component";
import Sidebar from "../../buisness/sidebar/Sidebar.component";
import Balloon from "../../buisness/baloon/Balloon.component";

const MainPage: FC = () => {
  return (
    <>
      <section className={s.main}>
        <Sidebar></Sidebar>
        <div className="container">
          <Map></Map>
        </div>
      </section>
      <Preloader />
      <Balloon />
    </>
  );
};

export default MainPage;
