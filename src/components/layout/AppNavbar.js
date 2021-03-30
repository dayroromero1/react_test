import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import logo from "../../logo.svg";

const useStyles = makeStyles((theme) => ({
  bar: {
    top: 0,
    left: 0,
    maxWidth: "100vw",
    height: "10%",
    background: "#0D1319",
    opacity: 1,
  },
  logo: {
    top: 24,
    left: 200,
    width: 190,
    height: 47,
    marginLeft: "10em",
  },
}));

export default function AppNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <img src={logo} alt=""></img>
        </Toolbar>
      </AppBar>
    </div>
  );
}
