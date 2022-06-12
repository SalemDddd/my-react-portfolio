import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Styles from "./App.module.scss";


function App() {
  return (

      <div className={Styles.app}>
        <NavBar />
        <Main />
      </div>

  );
}

export default App;
