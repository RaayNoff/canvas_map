import { FC } from "react";
import {} from "../../hooks/useActions";
import { usePreload } from "../../hooks/usePreload";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import s from "./preloader.module.scss";

const Preloader: FC = () => {
  const { percentage, isDone } = useTypedSelector((state) => state.preloader);
  usePreload();

  return (
    <div className={isDone ? `${s.preloader} ${s.hidden}` : `${s.preloader}`}>
      <div className={s.loader}>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default Preloader;
