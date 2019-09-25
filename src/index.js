import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import SignInComp from './components/user/SignInComp'
// import UserFormComp from './components/user/UserFormComp'
// import UserDetailsComp from './components/user/UserDetailsComp'
// import ProductListComp from './components/product/ProductListComp'
// import ProductComp from './components/product/ProductComp'
// import ProductDetailsComp from './components/product/ProductDetailsComp'
// import CartItemComp from './components/order/CartItemComp'
// import CartListComp from './components/order/CartListComp'
// import NavigationBarComp from './components/common/NavigationBarComp'
import _Drawer from "./components/common/_Drawer";
import UserAuthDialogComp from "./components/user/UserAuthDialogComp";
import UserFormDialogComp from "./components/user/UserFormDialogComp";
import UserDetailsDialogComp from "./components/user/UserDetailsDialogComp";
import CartListComp from "./components/order/CartListComp";
import ProductDetailsComp from "./components/product/ProductDetailsComp";
import CategoryDrawerComp from "./components/navigation/CategoryDrawerComp"
import NavigationBar from "./components/navigation";
import App from "./App";
// const props = {
//     placeholder: "hello world",
//     disabled: true,
// }
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import Pagination from "material-ui-flat-pagination";

// const theme = createMuiTheme();

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { offset: 0 };
//   }

//   handleClick(offset) {
//     this.setState({ offset });
//   }

//   render() {
//     return (
//       <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//         <Pagination
//           limit={5}
//           offset={this.state.offset}
//           total={25}
//           onClick={(e, offset) => this.handleClick(offset)}
//         />
//       </MuiThemeProvider>
//     );
//   }
// }

// ReactDOM.render(<Example />, document.getElementById("root"));
