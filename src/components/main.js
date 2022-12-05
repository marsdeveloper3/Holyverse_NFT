import React, {Component} from 'react';


import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
 import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    marginLeft:"35px",
    flexGrow: "1",
    cursor: "pointer",
    

  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#ffffff' ,color : '#7620b7'}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            <img src="logo-horizontal.png"></img>
        </Typography>
          <div className={classes.navlinks}>
            
            <Divider orientation="vertical" flexItem />  
            
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
            <a href="" className={classes.link}>
                <Button variant="outlined">Connnected wallet</Button>
            </a>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Main;