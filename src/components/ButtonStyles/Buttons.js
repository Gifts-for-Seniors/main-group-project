import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { withTheme } from "emotion-theming";
import { red } from "@material-ui/core/colors";
const StyledButton = withStyles({
  root: {
    background: "#0352fc",
    borderRadius: 17,
    color: "white",
    padding: "0 30px",
    height: ".2%",
    width: ".2%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    size: "medium",
  },
})(Button);
const RemoveButton = withStyles({
  root: {
    background: "#bd0f32",
    borderRadius: 22,
    color: "white",
    height: ".2%",
    padding: "0 30px",
    width: ".2%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);
export { StyledButton, RemoveButton };
