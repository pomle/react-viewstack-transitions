import React from "react";
import { addStyle } from "../style";
import { TransitionEffectProps } from "../types";

addStyle(`
.pomle-react-viewstack-fade {
  height: 100%;
  transition: opacity 0.5s ease;
}`);

export default function Fade({ active, children }: TransitionEffectProps) {
  return (
    <div
      className='pomle-react-viewstack-fade'
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? "all" : "none",
      }}
    >
      {children}
    </div>
  );
}
