import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

function Form({ handleFormSubmit, handleClose, isFormOpen }) {
  const [taskname, setTaskName] = useState("");
  const [lob, setLob] = useState("");
  const [subTask, setSubTaskName] = useState("");
  const [steps, setSteps] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <div>
      <Dialog
        open={isFormOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter the Task Details</DialogTitle>
        <DialogContent>
          <TextField
            value={taskname}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            id="standard-basic"
            label="enter the task name"
          />
          <br />
          <TextField
            value={lob}
            onChange={(e) => {
              setLob(e.target.value);
            }}
            id="standard-basic"
            label="enter the task lob value"
          />
          <br />
          <TextField
            value={subTask}
            onChange={(e) => {
              setSubTaskName(e.target.value);
            }}
            id="standard-basic"
            label="enter the subtask value"
          />
          <br />
          <TextField
            value={steps}
            onChange={(e) => {
              setSteps(e.target.value);
            }}
            id="standard-basic"
            label="enter the steps"
          />
          <br />
          <TextField
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
            id="standard-basic"
            label="enter the task duedate"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              let formValues = {
                id: Math.random(),
                taskName: taskname,
                lob: lob,
                subtasks: subTask,
                steps: steps,
                dueDate: dueDate,
              };
              handleFormSubmit(formValues);
              setTaskName(" ");
              setLob("");
              setSubTaskName("");
              setSteps("");
              setDueDate("");
            }}
          >
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Form;
