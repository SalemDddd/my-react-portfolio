import React from "react";
import Style from "./About.module.scss";
import Additionally from './additionally/additionally'
import Content from './Content/Content'
import Services from './../Services/Services'

let About = () => {
  return <div className={Style.block} id={'AboutPage'}>
      <div className={Style.conteiner}>
        <Additionally/>
        <Content />    
        <Services/>
      </div>
  </div>;
};

export default About;
