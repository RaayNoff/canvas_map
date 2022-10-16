import { useState, useMemo, useEffect } from "react";

export const usePosition = (offsetTop: number, offsetLeft: number) => {
  const [requiredPosition, setRequiredPosition] = useState({
    top: 0,
    left: 0,
  });

  const [mapElement, setMapElement] = useState(
    document.getElementsByClassName("konvajs-content")[0] as HTMLDivElement
  );
  const [contaner, setContainer] = useState(
    document.getElementsByClassName("sobaka")[0] as HTMLDivElement
  );

  useEffect(() => {
    const top = mapElement.offsetTop + mapElement.scrollTop;
    const left = mapElement.offsetLeft + mapElement.scrollLeft;

    setRequiredPosition({
      top: top + offsetTop,
      left: left + offsetLeft,
    });
  }, [mapElement, offsetTop, offsetLeft]);

  return requiredPosition;
};
