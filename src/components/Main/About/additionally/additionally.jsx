import React from 'react'
import Style from "./../About.module.scss";
import Fade from 'react-reveal/Fade';

let additionally = () =>
{

    return(
        <>
            <Fade bottom>
            <div className={Style.title}>

            <h1>About Me</h1></div>
        <div className={Style.content}>
        <img 
            src="https://sun1.userapi.com/sun1-89/s/v1/ig2/Pn3A85Iv2sFqqks_fWZ2zSKqwekAqSRHU_FPVeIDAtONlQICr6zwSHSkNARg6Lc6RtAedyKEQ8KSVgJWiYT7POIW.jpg?size=50x50&quality=95&crop=425,4,833,833&ava=1" />
        <div className={Style.CV}>
            <div>
                <p> I'm Alexandr Seredkin , full-stack developer from Belogorod! I have been developing frontend web applications for more than a year! Thanks for coming to see</p>
                <button> Download CV</button>
            </div>
            <div className={Style.progressbars}>

                <div>
                <div><p>HTML/CSS</p><p className={Style.procents}>98%</p></div>
                <progress className={Style.progress1} max="100" value="98"></progress>
                </div>
                
                <div>
                <div><p>JavaScript</p><p className={Style.procents}>89%</p></div>
                <progress className={Style.progress1} max="100" value="89"></progress>
                </div>

                <div>
                <div><p>React + REDUX</p><p className={Style.procents}>76%</p></div>
                <progress className={Style.progress1} max="100" value="76"></progress>
                </div>


            </div>
        </div>

    </div>
        </Fade>
    </>
    )
}

export default additionally;