import React from 'react'
import Style from "../About.module.scss";
import codes from '../../../../assets/code.svg'
import code2 from '../../../../assets/code2.svg'
import coffee from '../../../../assets/coffee.svg'
import night from '../../../../assets/night.svg'
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';

let Content = () =>
{
    return(
        <div className={Style.achievements} >
            <Fade bottom>
        <div>
            <img src={codes} alt={'fire'}/>
            <div className={Style.item}>
                <h1 className={Style.projectsH}
                ><CountUp 
                    end={1}
                    diration={5}
                /></h1>
                <p>Projects completed</p>
            </div>
        </div>
        <div>
            <img src={coffee} alt={'coffee'} />
            <div className={Style.item}>
                <h1><CountUp 
                    end={3250}
                    diration={5}
                /></h1>
                <p>Coffee cups</p>
            </div>
        </div>
        <div>
            <img src={night} alt={'night'} />
            <div className={Style.item}>
                <h1><CountUp 
                    end={1730}
                    diration={5}
                /></h1>
                <p> Nights unslept </p>
            </div>
        </div>
        <div>
            <img src={code2} alt={'code'} />
            <div className={Style.item}>
                <h1><CountUp 
                    end={100}
                    diration={5}
                /></h1>
                <p>% love for code</p>
            </div>
        </div>
        </Fade>
</div>
    )
}

export default Content