// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import '../css/Home.css';
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Main = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={'MuiAppBar-colorPrimary'}>
          <Toolbar>
            <Typography
              variant="h5"
              component="p"
              color="textSecondary"
              className={classes.title}
            >
              <Typography variant="h4" className={classes.logo}>
                <img src="logo-horizontal.png"></img>
              </Typography>
              
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  color="textPrimary"
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/"
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/about"
                  >
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> About </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/avartars"
                  >
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Avartars</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/collections"
                  >
                    <ListItemIcon>
                      <BookmarksIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Collections </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button
                  variant="text"
                  component={Link}
                  to="/"
                  color="default"
                >
                  <HomeIcon />
                  Home
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/collections"
                  color="default"
                >
                  <SchoolIcon />
                  Collections
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/about"
                  color="default"
                >
                  <PersonIcon />
                  About
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/avartars"
                  color="default"
                >
                  <BookmarksIcon />
                  Avartars
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to=""
                  color="default"
                >
                  
                  Connect Wallet
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Main;

