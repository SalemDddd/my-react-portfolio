import React from "react";
import Styles from './Main.module.scss'
import MePresentPage from './MePresentPage/MePresentPage'
import About from './About/About'

let Main = () => 
{
    return(
        <div className={Styles.conteiner}>
            <MePresentPage />
            <About />
        </div>
    )
}

export default Main