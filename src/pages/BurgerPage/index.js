import React, { useState } from "react";

import styles from "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const Index = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };
  const hideConfirmModal = () => {
    setConfirmOrder(false);
  };
  const continueOrder = () => {
    props.history.push({ pathname: "/ship" });
    hideConfirmModal();
  };

  return (
    <div>
      <Modal show={confirmOrder} hide={hideConfirmModal}>
        <OrderSummary onCancel={hideConfirmModal} onConfirm={continueOrder} />
      </Modal>
      <Burger />
      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default Index;
