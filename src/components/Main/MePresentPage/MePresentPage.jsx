import React from "react";
import Styles from './MePresentPage.module.scss'
import Info from './info'


let MePresentPage = () => 
{

    return(
        <div className={Styles.me}>
            <div className={Styles.conteiner}>
              <Info />
            </div>
        </div>
    )
}

export default MePresentPage