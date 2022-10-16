import { clear } from "console";
import { useState, useEffect, useMemo } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const usePreload = () => {
  const { percentage } = useTypedSelector((state) => state.preloader);
  const { changePreloadPercentage, changePreloadCondition } = useActions();
  const [interv, setInterv] = useState<any>();

  useMemo(() => {
    if (percentage >= 100) {
      clearInterval(interv);
      setTimeout(() => {
        changePreloadCondition(true);
      });
    }
  }, [percentage]);

  useEffect(() => {
    const interval = setInterval(() => {
      changePreloadPercentage(10);
    }, 250);
    setInterv(interval);

    return () => clearInterval(interval);
  }, []);
};
