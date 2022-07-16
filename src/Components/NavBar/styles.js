import { alpha, makeStyles } from "@material-ui/core";

export const customStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    fontFamily: '"B Titr" !important',
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    fontFamily: '"B Titr" !important',
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: "50%",
    padding: "2px 4px",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.showSearch ? "flex" : "none"),
      width: "75%",
    },
  },
  input: {
    padding: "0px 7px",
    color: "#fff",
    width: "100%",
  },
  badges: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (!props.showSearch ? "flex" : "none"),
    },
  },
  badge: {
    marginLeft: theme.spacing(2),
  },
  searchBtn: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  close: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
