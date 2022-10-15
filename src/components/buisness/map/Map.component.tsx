import { useTypedSelector } from "../../../hooks/useTypedSelector";
import s from "./map.module.scss";
import { useRef, useState, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import Sidebar from "../sidebar/Sidebar.component";
import Mark from "../../ui/mark/Mark.component";

const Map = () => {
  const { isEmpty, marks } = useTypedSelector((state) => state.map);
  const mapRef = useRef<HTMLDivElement>(null);
  const { addNewMark } = useActions();
  const { isOpened } = useTypedSelector((state) => state.sidebar);
  const [mapOffset, setMapOffset] = useState({ top: 0, left: 0 });
  const { setSidebarOpened } = useActions();

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      setMapOffset({
        left: map.offsetLeft,
        top: map.offsetTop,
      });
      console.log(mapOffset);
    }
  }, [mapRef?.current]);

  const addAddressHandler = () => {
    setSidebarOpened(true);
  };

  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpened && mapRef.current) {
      console.log(e);
      const x = e.pageX;
      const y = e.pageY;
      const map = mapRef.current;
      console.log(`${x - map.offsetLeft}:${y - map.offsetTop}`);
      const innerX = x - map.offsetLeft;
      const innerY = y - map.offsetTop;
      addNewMark({
        address: "Залупа",
        descrition: "123",
        title: "321",
        position: {
          left: innerX,
          top: innerY,
        },
      });
    }
  };

  return (
    <div className={s.map} ref={mapRef} onClick={(e) => clickHandler(e)}>
      {marks?.map((m, i) => (
        <Mark
          position={{
            left: mapOffset.left + m.position.left + 320 - 10,
            top: mapOffset.top + m.position.top - 10,
          }}
          key={i}
        ></Mark>
      ))}
      {!isOpened && (
        <button
          className={s.btn}
          onClick={() => {
            addAddressHandler();
          }}
        >
          Добавить адрес
        </button>
      )}
      {isEmpty && !isOpened && <p>Меток не обнаружено</p>}
    </div>
  );
};

export default Map;
