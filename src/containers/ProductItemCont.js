import { connect } from "react-redux";
import { addToCart } from "../actions/order";
import ProductItemComp from "../components/product/ProductItemComp"

const mapDispatchToProps = dispatch => {
    return {
      addToCart: (item, cost) => dispatch(addToCart(item, cost))
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(ProductItemComp);
  