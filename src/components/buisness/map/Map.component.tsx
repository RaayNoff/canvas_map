import { useTypedSelector } from "../../../hooks/useTypedSelector";
import s from "./map.module.scss";

import { useRef, Fragment } from "react";
import { useActions } from "../../../hooks/useActions";
import { Stage, Layer } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import Mark from "../../ui/mark/Mark.component";
import Balloon from "../baloon/Balloon.component";

const Map = () => {
  const { isEmpty, marks, newSelectedMark } = useTypedSelector(
    (state) => state.map
  );
  const { isOpened: isBalloonOpened } = useTypedSelector(
    (state) => state.balloon
  );
  const mapRef = useRef(null);
  const { setNewSelectedMark, setAddress, changeBalloonVisible } = useActions();
  const { isOpened: isSidebarOpened } = useTypedSelector(
    (state) => state.sidebar
  );
  const { setSidebarOpened } = useActions();

  const addAddressHandler = () => {
    setSidebarOpened(true);
    changeBalloonVisible(false);
  };

  const canvasClick = (e: KonvaEventObject<MouseEvent>) => {
    if (isSidebarOpened) {
      const { x, y } = e.currentTarget.getRelativePointerPosition();

      setNewSelectedMark({
        x: x,
        y: y,
      });
      setAddress();
    } else {
      handleCloseBalloon(e);
    }
  };

  const handleCloseBalloon = (e: KonvaEventObject<any>) => {
    if (isBalloonOpened && !e.target.attrs.radius) {
      changeBalloonVisible(false);
    }
  };

  return (
    <>
      <Fragment>
        <Stage
          width={1280}
          height={800}
          className={s.map}
          ref={mapRef}
          onClick={(e) => canvasClick(e)}
          onTouchMove={(e) => handleCloseBalloon(e)}
        >
          <Layer className={s.map__canvas}>
            {!isSidebarOpened &&
              marks.map((mark, i) => (
                <Mark
                  key={i}
                  x={mark.x}
                  y={mark.y}
                  description={mark.descrition}
                  title={mark.title}
                  fill="red"
                  canShowBalloon={true}
                ></Mark>
              ))}
            {isSidebarOpened && (
              <Mark
                x={newSelectedMark?.x || -10}
                y={newSelectedMark?.y || -10}
                fill="blue"
                canShowBalloon={false}
              ></Mark>
            )}
          </Layer>
        </Stage>
      </Fragment>
      {!isSidebarOpened && (
        <section className={s.map__info}>
          <button className={s.map__btn} onClick={() => addAddressHandler()}>
            Добавить адрес
          </button>
          {isEmpty && <p className={s.map__empty}>Меток не обнаружено</p>}
        </section>
      )}
    </>
  );
};

export default Map;
