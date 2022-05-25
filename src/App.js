import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Styles from "./App.module.scss";
import OverlayScrollbars from 'overlayscrollbars';

function App() {
  return (
      <div className={Styles.app}>
        <NavBar />
        <Main />
      </div>
  );
}


OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
      initialize: false
  }
});

export default App;
