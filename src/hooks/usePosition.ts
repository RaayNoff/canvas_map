import { useState, useMemo } from "react";

export const usePosition = (offsetTop: number, offsetLeft: number) => {
  const [requiredPosition, setRequiredPosition] = useState({
    top: 0,
    left: 0,
  });

  const [mapElement, setMapElement] = useState(
    document.getElementsByClassName("konvajs-content")[0] as HTMLDivElement
  );
  const [container, setContainer] = useState(
    document.getElementsByClassName("container")[0] as HTMLDivElement
  );
  useMemo(() => {
    setRequiredPosition({
      top: mapElement.offsetTop + offsetTop - 10,
      left: mapElement.offsetLeft + offsetLeft,
    });
  }, [
    mapElement,
    offsetTop,
    offsetLeft,
    container.scrollTop,
    container.scrollLeft,
    container,
  ]);

  return requiredPosition;
};
