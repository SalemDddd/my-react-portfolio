import React from "react";
import MenuButtons from "./MenuButtons";
import Styles from './NavBar.module.scss'



let NavBar = () => 
{
    return(
        <div className={Styles.conteiner}>
            <div>
                <h1 className={Styles.logoText}>My Portfolio <span className={Styles.dot}>.</span></h1>
            </div>
            <div>
                <MenuButtons />
            </div>
            
        </div>
    )
}

export default NavBar




