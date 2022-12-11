import React from "react";
import { Direction, TransitionEffectProps } from "../types";

function transform({ active, direction }: Omit<SlideProps, "children">) {
  if (active) {
    return "none";
  }

  const [x, y] = direction;

  return `translate(
    calc(${x * 100}% + ${x * 20}px),
    calc(${y * 100}% + ${y * 20}px)
  )`;
}

const style = document.createElement("style");
style.textContent = `
.pomle-react-viewstack-slide {
  boxShadow: 0 0 20px -10px;
  height: 100%;
  transition: transform 0.3s ease;
}
`;

interface SlideProps extends TransitionEffectProps {
  direction: Direction;
}

export default function Slide({ active, direction, children }: SlideProps) {
  return (
    <div
      className='pomle-react-viewstack-slide'
      style={{
        pointerEvents: active ? "all" : "none",
        transform: transform({ active, direction }),
      }}
    >
      {children}
    </div>
  );
}
