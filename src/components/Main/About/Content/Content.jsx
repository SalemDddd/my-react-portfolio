import React from 'react'
import Style from "../About.module.scss";
import code from '../../../../assets/code.svg'

let Content = () =>
{
    return(
        <div className={Style.achievements}>
        <div>
            <img src={code} />
            <div className={Style.item}>
                <h1>198</h1>
                <p>Projects completed</p>
            </div>
        </div>
        <div>
            <img src={code} />
            <div className={Style.item}>
                <h1>198</h1>
                <p>Projects completed</p>
            </div>
        </div>
        <div>
            <img src={code} />
            <div className={Style.item}>
                <h1>198</h1>
                <p>Projects completed</p>
            </div>
        </div>
        <div>
            <img src={code} />
            <div className={Style.item}>
                <h1>198</h1>
                <p>Projects completed</p>
            </div>
        </div>
       
</div>
    )
}

export default Content