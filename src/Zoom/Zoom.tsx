import React from "react";
import { Direction, TransitionEffectProps } from "../types";

function transform({ active, direction }: Omit<ZoomProps, "children">) {
  if (active) {
    return "none";
  }

  const [x, y] = direction;

  return `
    translate(
      ${x * 100}%,
      ${y * 100}%
    )
    scale(1.5)
  `;
}

interface ZoomProps extends TransitionEffectProps {
  direction: Direction;
}

export default function Zoom({ active, direction, children }: ZoomProps) {
  return (
    <div
      style={{
        height: "100%",
        opacity: active ? 1 : 0,
        pointerEvents: active ? "all" : "none",
        transform: transform({ active, direction }),
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}
