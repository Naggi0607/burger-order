import React, { Component } from "react";
import axios from "../../axios_orders";

import styles from "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

class index extends Component {
  state = {
    confirmOrder: false,
    loading: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  hideConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  continueOrder = () => {
    this.props.history.push({ pathname: "/ship" });
    this.hideConfirmModal();
  };

  render() {
    return (
      <div>
        <Modal show={this.state.confirmOrder} hide={this.hideConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.hideConfirmModal}
              onConfirm={this.continueOrder}
            />
          )}
        </Modal>
        <Burger />
        <BuildControls showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default index;
