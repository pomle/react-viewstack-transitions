import React from "react";
import { TransitionEffectProps } from "../types";

export default function Fade({ active, children }: TransitionEffectProps) {
  return (
    <div
      style={{
        height: "100%",
        opacity: active ? 1 : 0,
        pointerEvents: active ? "all" : "none",
        transition: "opacity 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}
