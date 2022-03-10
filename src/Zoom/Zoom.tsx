import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Direction, TransitionEffectProps } from "../types";

const transform = ({ active, direction }: ZoomProps) => {
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
};

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

const Zoom: React.FC<ZoomProps> = ({ active, direction, children }) => {
  const classes = useStyles({ active, direction });
  return <div className={classes.Zoom}>{children}</div>;
};

export default Zoom;
