import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    borderLeft: "1px solid #11111112",
    padding: "20px 0px",
    position: "sticky",
    top: "0px",
    overflowY: "auto",
    height: "100vh",
  },
  imageGalery: {
    left: "0px",
    transform: "translateX(0%)",
    right: "0px",
    top: 0,
  },
  box: {
    marginBottom: theme.spacing(3),
  },
  imageList: {
    margin: "0px !important",
  },
}));

const LeftBar = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:855px)");
  const matches2 = useMediaQuery("(max-width:638px)");

  const dataAvatar = [
    {
      alt: "Remy Sharp",
      src: "https://v4.mui.com/static/images/avatar/1.jpg",
    },
    {
      alt: "Travis Howard",
      src: "https://v4.mui.com/static/images/avatar/2.jpg",
    },
    {
      alt: "Cindy Baker",
      src: "https://v4.mui.com/static/images/avatar/3.jpg",
    },
    {
      alt: "Agnes Walker",
      src: "https://v4.mui.com/static/images/avatar/4.jpg",
    },
    {
      alt: "Trevor Henderson",
      src: "https://v4.mui.com/static/images/avatar/5.jpg",
    },
    {
      alt: "Agnes Walker",
      src: "https://v4.mui.com/static/images/avatar/4.jpg",
    },
    {
      alt: "Trevor Henderson",
      src: "https://v4.mui.com/static/images/avatar/5.jpg",
    },
  ];

  const dataGalery = [
    {
      img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
      cols: 2,
    },
    {
      img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/camera.jpg",
      cols: 2,
    },
    {
      img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    },
    {
      img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    },
  ];

  return (
    <Container className={classes.container}>
      <Typography gutterBottom component={"h6"}>
        دوستان آنلاین
      </Typography>
      <AvatarGroup className={classes.box} max={matches ? 4 : 6}>
        {dataAvatar.map((e, i) => (
          <Avatar src={e.src} alt={e.alt} key={e.alt + i} />
        ))}
      </AvatarGroup>
      <Typography gutterBottom component={"h6"}>
        گالری
      </Typography>
      <ImageList
        rowHeight={70}
        className={`${classes.imageList} ${classes.box}`}
        cols={3}
      >
        {dataGalery.map((item) => (
          <ImageListItem key={item.img} cols={matches2 ? 3 : item.cols || 1}>
            <img
              className={classes.imageGalery}
              src={item.img}
              alt={"test images"}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        {" "}
        <Divider />
        <Divider />
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <Divider />
        <Divider />
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
        <Divider />
        <Divider />
      </List>
    </Container>
  );
};

export default LeftBar;
