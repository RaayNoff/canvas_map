import React, { FC, useRef, useState } from "react";
import { Circle } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import { usePosition } from "../../../hooks/usePosition";
import { useActions } from "../../../hooks/useActions";

interface IMarkProps {
  x: number;
  y: number;
  address?: string;
  title?: string;
  description?: string;
  fill: string;
  canShowBalloon: boolean;
}

const Mark: FC<IMarkProps> = ({
  fill,
  x,
  y,
  canShowBalloon,
  address,
  title,
  description,
}) => {
  const circleRef = useRef(null);
  const { changeBalloonData, changeBalloonPosition, changeBalloonVisible } =
    useActions();
  const { left, top } = usePosition(y, x);

  const handleBaloonRequest = (e: KonvaEventObject<any>) => {
    if (canShowBalloon) {
      changeBalloonData(title || "", description || "");

      changeBalloonPosition(top, left);
      changeBalloonVisible(true);
    }
  };

  return (
    <>
      <Circle
        ref={circleRef}
        x={x}
        y={y}
        radius={10}
        fill={fill}
        onClick={(e) => handleBaloonRequest(e)}
        onTap={(e) => handleBaloonRequest(e)}
      ></Circle>
    </>
  );
};

export default Mark;
