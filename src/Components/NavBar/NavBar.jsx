import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Mail } from "@material-ui/icons";
import { customStyles } from "./styles";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const classes = customStyles({ showSearch });

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logoLg} variant="h6">
          وبلاگ سایت من
        </Typography>
        <Typography className={classes.logoSm} variant="h6">
          وبلاگ
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase className={classes.input} placeholder="جستجو..." />
          <CloseIcon
            onClick={() => setShowSearch(false)}
            className={classes.close}
          />
        </div>

        <div className={classes.badges}>
          <Search
            onClick={() => {
              setShowSearch((c) => !c);
            }}
            className={`${classes.badge} ${classes.searchBtn}`}
          />
          <Badge className={classes.badge} badgeContent={4} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Badge className={classes.badge} badgeContent={3} color="error">
            <Mail />
          </Badge>
          <Avatar
            alt="user name"
            src={
              "data:image/jpeg;base64,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"
            }
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
