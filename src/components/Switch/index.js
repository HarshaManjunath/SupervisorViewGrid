import React from "react";
import { FormGroup, FormControlLabel } from "@material-ui/core";
import IOSSwitch from "./styles";

function Toggle() {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Multi Sort"
      />
    </FormGroup>
  );
}
export default Toggle;
