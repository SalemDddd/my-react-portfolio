import React from 'react'
import Style from "../About.module.scss";
import code from '../../../../assets/code.svg'
import code2 from '../../../../assets/code2.svg'
import coffee from '../../../../assets/coffee.svg'
import night from '../../../../assets/night.svg'
import Fade from 'react-reveal/Fade';

let Content = () =>
{

    return(
        <div className={Style.achievements} >
            <Fade bottom>
        <div>
            <img src={code} />
            <div className={Style.item}>
                <h1>2</h1>
                <p>Projects completed</p>
            </div>
        </div>
        <div>
            <img src={coffee} />
            <div className={Style.item}>
                <h1>198</h1>
                <p>Coffee cups</p>
            </div>
        </div>
        <div>
            <img src={night} />
            <div className={Style.item}>
                <h1>357</h1>
                <p> Nights unslept </p>
            </div>
        </div>
        <div>
            <img src={code2} />
            <div className={Style.item}>
                <h1>100</h1>
                <p>% love for code</p>
            </div>
        </div>
        </Fade>
</div>
    )
}

export default Content