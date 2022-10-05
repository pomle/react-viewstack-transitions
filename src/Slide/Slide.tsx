import React from "react";
import { makeStyles } from "@material-ui/styles";
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

const useStyles = makeStyles({
  Slide: {
    boxShadow: "0 0 20px -10px",
    height: "100%",
    pointerEvents: (props) => (props.active ? "all" : "none"),
    transform,
    transition: "all 0.3s ease",
  },
});

interface SlideProps extends TransitionEffectProps {
  direction: Direction;
}

export default function Slide({ active, direction, children }: SlideProps) {
  const classes = useStyles({ active, direction });
  return <div className={classes.Slide}>{children}</div>;
}
