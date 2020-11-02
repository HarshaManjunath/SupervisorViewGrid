import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import styles from "./styles";

const useStyles = makeStyles((theme) => styles(theme));

export default function IconLabelButtons() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<HighlightOffIcon />}
      >
        clear all filters
      </Button>
    </div>
  );
}
