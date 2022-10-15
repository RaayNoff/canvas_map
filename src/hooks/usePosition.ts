import { useEffect, useRef } from "react";

export const usePosition = (
  elementRef: any,
  offsetTop: number,
  offsetLeft: number
) => {
  const positionRef = useRef<any>(null);

  useEffect(() => {
    if (elementRef.current && positionRef.current) {
      const top = elementRef.current.offsetTop;
      const left = elementRef.current.offsetLeft;

      positionRef.current.style.top = top + offsetTop + "px";
      positionRef.current.style.left = left + offsetLeft + "px";
    }
  }, [elementRef.current?.offsetTop, elementRef.current?.offsetLeft]);

  return positionRef;
};
