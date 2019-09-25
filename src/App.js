import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/navigation";
import ProductListComp from "./components/product/ProductListComp";
import Grid from "@material-ui/core/Grid";
import CartListComp from "./components/order/CartListComp";

function App() {
  return (
    <div>
      <NavigationBar />
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <ProductListComp />
        </Grid>
        <Grid item xs={3}>
          <CartListComp />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
