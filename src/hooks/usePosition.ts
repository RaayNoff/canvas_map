import { useState, useMemo } from "react";

export const usePosition = (offsetTop: number, offsetLeft: number) => {
  const [requiredPosition, setRequiredPosition] = useState({
    top: 0,
    left: 0,
  });

  const [mapElement, setMapElement] = useState(
    document.getElementsByClassName("konvajs-content")[0] as HTMLDivElement
  );

  useMemo(() => {
    const top = mapElement.offsetTop;
    const left = mapElement.offsetLeft;

    setRequiredPosition({
      top: top + offsetTop,
      left: left + offsetLeft,
    });
  }, [mapElement, offsetTop, offsetLeft]);

  return requiredPosition;
};
