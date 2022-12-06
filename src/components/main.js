import React, {Component} from 'react';


import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import Divider from '@mui/material/divider';
 import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    // marginLeft: theme.spacing(10),
    display: "flex",
    width: "70%",
  },
 logo: {
    marginLeft:"3%",
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "1.4vw",
    width: "20%",
    display: "flex",
    alignItems: "center",
    // marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#ffffff' , color : '#7620b7'}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            <img src="logo-horizontal.png"></img>
        </Typography>
          <div className={classes.navlinks}>
            
            <Divider orientation="vertical" flexItem sx={{marginRight: "5%"}} />  
            
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/avartars" className={classes.link}>
              Avartars
            </Link>
            <Link to="/collections" className={classes.link}>
              Collections
            </Link>
            <Link to="" className={classes.link}>
                <Button variant="outlined" style={{fontSize:"1vw"}}>Connnected wallet</Button>
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Main;