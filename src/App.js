import { Grid, makeStyles } from "@material-ui/core";
import NavBar from "./Components/NavBar/NavBar";
import RightBar from "./Components/RightBar/RightBar";
import Posts from "./Components/Posts/Posts";
import LeftBar from "./Components/LeftBar/LeftBar";
import ModalAdd from "./Components/ModalAd";

const useStyles = makeStyles((theme) => ({
  rightBar: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  leftBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Grid container>
        <Grid className={classes.rightBar} xs={2} item sm={3}>
          <RightBar />
        </Grid>
        <Grid item xs={10} sm={6}>
          <Posts />
        </Grid>
        <Grid className={classes.leftBar} item sm={3}>
          <LeftBar />
        </Grid>
      </Grid>
      <ModalAdd />
    </>
  );
};

export default App;
