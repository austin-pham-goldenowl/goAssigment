import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/navigation";
import ProductListComp from "./components/product/ProductListComp";
import Grid from "@material-ui/core/Grid";
import CartListComp from "./containers/CartListCont";
import { connect } from "react-redux";

function App({ isLoginSuccess }) {
  const [category, setCategory] = useState(-1);

  const onCategoryClick = newCategory => {
    setCategory(newCategory);
  };

  return (
    <div>
      <NavigationBar onDrawerClick={onCategoryClick} onHomeClick={()=>setCategory(-1)}/>
      <Grid container spacing={3}>
        <Grid item xs={isLoginSuccess ? 8 : 12}>
          <ProductListComp
            isLoginSuccess={isLoginSuccess}
            category={category}
          />
        </Grid>
        <Grid item xs={isLoginSuccess ? 4 : 0}>
          {isLoginSuccess && <CartListComp />}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.logIn.isLoginSuccess
  };
};

export default connect(mapStateToProps)(App);
