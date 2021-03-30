import React, { Component } from "react";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import "./App.css";
import theme from "./theme/theme";
import AppNavbar from "./components/layout/AppNavbar";
import Carousel from "./components/views/Carousel";
import ProductView from "./components/views/Products";
import ServiceView from "./components/views/Services";
import ResponsabilityView from "./components/views/Responsability";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ position: "relative" }}>
          <AppNavbar />
          <Carousel />
          <ProductView />
          <ServiceView />
          <ResponsabilityView />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
