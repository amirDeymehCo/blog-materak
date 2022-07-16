import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    borderLeft: "1px solid #11111112",
    position: "sticky",
    top: "0px",
    paddingTop: theme.spacing(2),
    overflowY: "auto",
  },
  div: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    cursor: "pointer",
  },
  icon: {
    marginLeft: theme.spacing(1),
    fontSize: "20px",
    color: "#333",
    [theme.breakpoints.down("xs")]: {
      color: "#fff",
    },
  },
  text: {
    fontSize: "22px",
    color: "#555",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default useStyles;
