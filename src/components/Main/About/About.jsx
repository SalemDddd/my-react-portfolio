import React from "react";
import Style from "./About.module.scss";
import dots from '../../../assets/dots.svg'

let About = () => {
  return <div className={Style.block} id={'AboutPage'}>
      <div className={Style.conteiner}>
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
                    <p>HTML/CSS</p>
                    <progress id="file" max="100" value="90"></progress><span>90%</span>
                    <p>React</p>
                    <progress id="file" max="100" value="70"></progress> <span>70%</span>
                    <p>NodeJs</p>
                    <progress id="file" max="100" value="100"></progress><span>100%</span>
                </div>
            </div>

            </div>

      </div>


  </div>;
};

export default About;
