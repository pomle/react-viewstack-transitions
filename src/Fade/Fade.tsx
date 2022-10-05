import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TransitionEffectProps } from "../types";

function opacity({ active }: Omit<TransitionEffectProps, "children">) {
  return active ? 1 : 0;
}

const useStyles = makeStyles({
  Fade: {
    height: "100%",
    opacity,
    pointerEvents: (props) => (props.active ? "all" : "none"),
    transition: "opacity 0.5s ease",
  },
});

export default function Fade({ active, children }: TransitionEffectProps) {
  const classes = useStyles({ active });
  return <div className={classes.Fade}>{children}</div>;
}
