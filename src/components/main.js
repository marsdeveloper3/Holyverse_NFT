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

import { useWeb3React } from '@web3-react/core';
import { injected, walletconnector, bsc } from '../utils/connector';

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

  const { account, chainId, activate, deactivate } = useWeb3React();

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const connectMetamask = async () => {
    if (!account)
      await activate(injected);
    else
      await deactivate();

    setAnchor(null);
  }


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
                    <Typography variant="h6"> &nbsp;Collections </Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => connectMetamask()}
                    component={Link}
                    to=""
                  >
                    <Typography variant="h6">
                      {!account ? (
                        <>&nbsp;&nbsp;&nbsp;CONNECT WALLET</>
                      ) : (
                        <>{account.slice(0, 5) + '....' + account.slice(account.length - 4, account.length)}</>
                      )}
                    </Typography>
                  </MenuItem>

                </Menu>
              </>
            ) : (

              <div style={{ marginRight: "2rem", display: "flex" }}>
                <div style={{ borderLeft: "1px solid #D0D0D0", height: "50px", paddingLeft: "40px" }}></div>
                <Button
                  variant="text"
                  component={Link}
                  to="/"
                  color="default"

                >
                  &nbsp;Home
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/collections"
                  color="default"
                  style={{ display: "flex", }}
                >

                  &nbsp;Collections
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/about"
                  color="default"

                >

                  &nbsp;About
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/avartars"
                  color="default"

                >

                  &nbsp;Avartars
                </Button>
                <Button
                  variant="outlined"
                  onClick={connectMetamask}
                  component={Link}
                  to=""
                  color="default"
                  style={{ display: "flex", }}
                >
                  {!account ? (
                    <>CONNECT WALLET</>
                  ) : (
                    <>{account.slice(0, 5) + '......' + account.slice(account.length - 4, account.length)}</>
                  )}

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

