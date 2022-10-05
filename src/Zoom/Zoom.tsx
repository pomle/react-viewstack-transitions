import React from "react";
import { makeStyles } from "@material-ui/styles";
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

const useStyles = makeStyles({
  Zoom: {
    height: "100%",
    opacity: (props) => (props.active ? 1 : 0),
    pointerEvents: (props) => (props.active ? "all" : "none"),
    transform,
    transition: "all 0.3s ease",
  },
});

interface ZoomProps extends TransitionEffectProps {
  direction: Direction;
}

export default function Zoom({ active, direction, children }: ZoomProps) {
  const classes = useStyles({ active, direction });
  return <div className={classes.Zoom}>{children}</div>;
}
