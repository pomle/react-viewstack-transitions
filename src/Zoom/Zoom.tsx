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

const style = document.createElement("style");
style.textContent = `
.pomle-react-viewstack-zoom {
  height: 100%;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
`;

document.head.appendChild(style);

interface ZoomProps extends TransitionEffectProps {
  direction: Direction;
}

export default function Zoom({ active, direction, children }: ZoomProps) {
  return (
    <div
      className='pomle-react-viewstack-zoom'
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? "all" : "none",
        transform: transform({ active, direction }),
      }}
    >
      {children}
    </div>
  );
}
