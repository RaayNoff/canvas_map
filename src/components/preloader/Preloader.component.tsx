import { FC, useRef, useState, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import s from "./preloader.module.scss";

const Preloader: FC = () => {
  const { percentage } = useTypedSelector((state) => state.preloader);
  const { changePreloadPercentage } = useActions();

  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      changePreloadPercentage(percentage >= 100 ? percentage : percentage + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  document.body.onload = () => {
    changePreloadPercentage(100);
    if (preloaderRef.current) {
      preloaderRef.current.style.opacity = "0";
      preloaderRef.current.style.pointerEvents = "none";
    }
  };

  return (
    <div className={s.preloader} ref={preloaderRef}>
      <div className={s.loader}>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default Preloader;
