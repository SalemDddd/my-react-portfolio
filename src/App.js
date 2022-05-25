import React , {useEffect} from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Styles from "./App.module.scss";
import OverlayScrollbars from 'overlayscrollbars';

function App() {
  
  useEffect(() => {
    OverlayScrollbars(document.body, {});
  }, []);


  return (
      <div className={Styles.app}>
        <NavBar />
        <Main />
      </div>
  );
}


export default App;
