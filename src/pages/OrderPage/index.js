import React, { Component } from "react";
import style from "./style.module.css";

import axios from "../../axios_orders";
import Spinner from "../../components/General/Spinner";

import Order from "../../components/Order";
export default class index extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("/orders.json")
      .then((response) => {
        this.setState({ orders: Object.entries(response.data).reverse() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    console.log(this.state.orders);
    return (
      <div className={style.Orderpage}>
        <h1>Your orders</h1>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => <Order key={el[0]} Order={el[1]} />)
        )}
      </div>
    );
  }
}
