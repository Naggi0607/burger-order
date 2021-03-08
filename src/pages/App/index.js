import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
function App() {
  return (
    <div className={styles.App}>
      <Toolbar />
      <main className={styles.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
