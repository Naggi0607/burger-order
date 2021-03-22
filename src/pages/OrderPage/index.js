import React, { Component } from "react";
import { connect } from "react-redux";

import style from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

import * as actions from "../../redux/actions/orderActions";

class index extends Component {
  componentDidMount = () => {
    this.props.loadOrders();
    // this.setState({
    //   loading: true,
    // });
    // axios
    //   .get("/orders.json")
    //   .then((response) => {
    //     this.setState({ orders: Object.entries(response.data).reverse() });
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
  };

  render() {
    return (
      <div className={style.Orderpage}>
        <h1>Your orders</h1>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} Order={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(actions.loadOrders()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
