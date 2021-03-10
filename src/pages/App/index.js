import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import Sidebar from "../../components/Sidebar";
import BurgerPage from "../BurgerPage";
class App extends Component {
  state = { showSidebar: false };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  render() {
    return (
      <div className={styles.App}>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={styles.Content}>
          <BurgerPage />
        </main>
      </div>
    );
  }
}

export default App;
