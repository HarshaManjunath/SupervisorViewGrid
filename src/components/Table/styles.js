// const useStyles = makeStyles({});
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 50,
    backgroundColor: "white",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "13px",
    textTransform: "none",
    width: "75%",
  },
  table: {
    minWidth: 650,
  },
  slectTextBox: {
    borderRadius: 50,
    backgroundColor: "white",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "13px",
    textTransform: "none",
    width: "75%",
    backgroundColor: "blue",
  },
  tableHeader: {
    border: "1px solid #dacbcb !important",
  },
}));
export default useStyles;
