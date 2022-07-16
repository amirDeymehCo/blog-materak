import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import HomeIcon from "@material-ui/icons/Home";

const RightBar = () => {
  const classes = useStyles();
  const dataList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container className={classes.container}>
      {dataList.map((e, i) => (
        <div key={i} className={classes.div}>
          <HomeIcon className={classes.icon} />
          <Typography className={classes.text} variant="h5">
            خانه
          </Typography>
        </div>
      ))}
    </Container>
  );
};

export default RightBar;
