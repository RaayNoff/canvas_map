import { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import s from "./balloon.module.scss";

const Balloon: FC = () => {
  const {
    currentDescription: desc,
    currentTitle: title,
    top,
    left,
    isOpened,
  } = useTypedSelector((state) => state.balloon);
  const { changeBalloonVisible } = useActions();

  const handleClose = () => {
    changeBalloonVisible(false);
  };

  return (
    <div
      style={{ top, left }}
      className={isOpened ? s.balloon : `${s.balloon} ${s.hidden}`}
    >
      <button className={s.balloon__close} onClick={() => handleClose()}>
        X
      </button>
      <div className={s.balloon_data}>
        <p className={s.balloon__text}>{title}</p>
        <p className={s.balloon__text}>{desc}</p>
      </div>
      <span className={s.balloon__arrow}> </span>
    </div>
  );
};

export default Balloon;
