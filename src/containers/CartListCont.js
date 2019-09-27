import { connect } from "react-redux";
import { deleteFromCart } from "../actions/order";
import CartListComp from "../components/order/CartListComp";

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch => ({
  deleteFromCart: id => dispatch(deleteFromCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartListComp);
