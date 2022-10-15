import { FC } from "react";
import s from "./mainPage.module.scss";
import Map from "../../buisness/map/Map.component";
import Preloader from "../../preloader/Preloader.component";
import Sidebar from "../../buisness/sidebar/Sidebar.component";

const MainPage: FC = () => {
  return (
    <>
      <section className={s.main}>
        <div className="container">
          <Sidebar />
          <Map></Map>
        </div>
      </section>
      <Preloader />
    </>
  );
};

export default MainPage;
