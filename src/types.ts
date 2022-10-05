import React from "react";

export interface TransitionEffectProps {
  active?: boolean;
  children: React.ReactNode;
}

export type Direction = [number, number];
