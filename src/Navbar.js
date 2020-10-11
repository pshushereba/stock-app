import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <h2>Stock Info</h2>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
