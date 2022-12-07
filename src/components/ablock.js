import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    blankfield: {
     backgroundcolor:"#fff" ,
     color:"red",
    },
   
  }));


function Ablock() {
    const classes = useStyles();

    return (
        <div className={classes.blankfield}>sadf</div>
    );
  }
  
  export default Ablock;
