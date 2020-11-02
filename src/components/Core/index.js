import React, { useState, useEffect } from "react";

import { Typography, Button, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { AntTab, AntTabs, useStyles } from "./styles";

import Toggle from "../Switch";
import IconLabelButtons from "../Button";
import BasicTable from "../Table";
import AddTask from "../AddTask";
import tasks from "../../constants/tasks";

export default function Core() {
  const classes = useStyles();
  const [value, setValue] = useState("UNASSINGNED TASK");
  const [clicked, setClicked] = useState(false);
  const [tasksList, setTaskList] = useState([]);
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  useEffect(() => {
    setTaskList(tasks);
  }, []);

  const handleClickOpen = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handleChange = (event, value) => {
    if (value === 0) {
      setValue("UNASSINGNED TASK");
    } else if (value === 1) {
      setValue("ASSINED TASK");
    } else {
      setValue("ALL TASK");
    }
  };
  const handleClick = (e) => {
    setClicked(true);
  };
  const handleFormSubmit = (formValues) => {
    const tasksClone = [...tasksList, { ...formValues }];
    setTaskList(tasksClone);
    setIsFormOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* Component to trigger form modal to add a task */}
      <AddTask
        handleFormSubmit={handleFormSubmit}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        isFormOpen={isFormOpen}
      />
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab
            label="UNASSINGNED TASK"
            style={
              value === "UNASSINGNED TASK"
                ? { backgroundColor: "whitesmoke" }
                : {}
            }
          />
          <AntTab
            label="ASSINED TASK"
            style={
              value === "ASSINED TASK" ? { backgroundColor: "whitesmoke" } : {}
            }
          />
          <AntTab
            label="ALL TASK"
            style={
              value === "ALL TASK" ? { backgroundColor: "whitesmoke" } : {}
            }
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Assign Task(s)
              </Button>
            </Grid>
          </Grid>
        </AntTabs>

        <Typography className={classes.padding} />
      </div>
      {value == "UNASSINGNED TASK" && (
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Toggle />
          </Grid>

          <Grid item>
            <IconLabelButtons />
          </Grid>
          <Grid item>
            <span>Results: 1 to 5 of 144</span>
          </Grid>
          <Grid item>
            <span>items per page</span>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </Grid>
          <Grid item>
            <Pagination
              count={10}
              showFirstButton
              showLastButton
              variant="outlined"
              shape="rounded"
            />
          </Grid>
          <Grid item>
            <span>Go to page</span>
            <input style={{ width: 20, height: 20 }} value="6" /> of 10
          </Grid>
          <Grid item>
            <Link style={{ color: "blue", textDecoration: "underline dotted" }}>
              {" "}
              Go {">"}
            </Link>
          </Grid>
          <BasicTable tasks={tasksList} />
        </Grid>
      )}
    </div>
  );
}
