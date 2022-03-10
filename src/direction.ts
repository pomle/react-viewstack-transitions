import type { Direction as Dir } from "./types";

export const Direction = {
  Center: [0, 0] as Dir,
  Up: [0, -1] as Dir,
  Down: [0, 1] as Dir,
  Left: [-1, 0] as Dir,
  Right: [1, 0] as Dir,
};
