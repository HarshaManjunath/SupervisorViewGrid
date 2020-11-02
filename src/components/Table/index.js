import React from "react";
import useStyles from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import SettingIcon from "../../assets/settings.png";
import SortIcon from "../../assets/sort.png";
import dueDate from "../../assets/duedate.png";

import status from "../../constants/status";
import moment from "moment";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function BasicTable({ tasks }) {
  const classes = useStyles();

  const getColor = (lobValue) => {
    switch (lobValue) {
      case "MEDICARE":
        return { backgroundColor: "purple", color: "white" };
      case "COMMERCIAL":
        return { backgroundColor: "grey", color: "white" };
      case "EXCHANGE":
        return { backgroundColor: "orange", color: "white" };
      case "MEDICAID":
        return { backgroundColor: "pink", color: "white" };
      default:
        return { backgroundColor: "grey", color: "white" };
    }
  };

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className={classes.tableHeader}>
            <img src={SettingIcon} alt="Settings" style={{ width: "25px" }} />
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <input type="checkbox" />
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <Grid container justify="space-between">
              <Grid item>TaskName</Grid>
              <Grid item>
                <img
                  src={SortIcon}
                  alt="SortIcon"
                  style={{ width: "25px", height: "12px" }}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <Grid container justify="space-between">
              <Grid item>LOB</Grid>
              <Grid item>
                <img
                  src={SortIcon}
                  alt="SortIcon"
                  style={{ width: "25px", height: "12px" }}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <Grid container justify="space-between">
              <Grid item>SUBTASKS</Grid>
              <Grid item>
                <img
                  src={SortIcon}
                  alt="SortIcon"
                  style={{ width: "25px", height: "12px" }}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <Grid container justify="space-between">
              <Grid item>ASSIGNED TO</Grid>
              <Grid item>
                <img
                  src={SortIcon}
                  alt="SortIcon"
                  style={{ width: "25px", height: "12px" }}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <Grid container justify="space-between">
              <Grid item>STEPS</Grid>
              <Grid item>
                <img
                  src={SortIcon}
                  alt="SortIcon"
                  style={{ width: "25px", height: "12px" }}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableHeader}>
            <Grid container justify="space-between">
              <Grid item>DUEDATE</Grid>
              <Grid item>
                <img
                  src={dueDate}
                  alt="dueDate"
                  style={{ width: "25px", height: "12px" }}
                />
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => {
          console.log("task in table", task);
          return (
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: "blue",
                  textDecoration: "underline dotted",
                }}
              >
                {task.taskName}
              </TableCell>
              <TableCell align="left">
                <Button
                  style={{ boxShadow: "0" }}
                  variant="contained"
                  size="large"
                  className={classes.button}
                  style={getColor(task.lob)}
                >
                  {task.lob}
                </Button>
              </TableCell>
              <TableCell align="left">{task.subtasks}</TableCell>
              <TableCell align="left">
                <Autocomplete
                  id="combo-box-demo"
                  options={status}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                />
              </TableCell>
              <TableCell align="left">{task.steps}</TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                >
                  {moment(task.dueDate).format("L @ h:mm a")}
                </Button>{" "}
                {">"}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
