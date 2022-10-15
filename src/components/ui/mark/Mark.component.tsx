import { FC } from "react";
import s from "./mark.module.scss";

interface IMarkProps {
  position: {
    top: number;
    left: number;
  };
}

const Mark: FC<IMarkProps> = ({ position: { left, top } }) => {
  return (
    <div className={s.dot} style={{ left: `${left}px`, top: `${top}px` }}></div>
  );
};

export default Mark;
