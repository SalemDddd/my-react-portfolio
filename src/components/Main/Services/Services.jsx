import React from "react";
import Style from "./Services.module.scss";
import DevelopImg from "../../../assets/web-development.svg";
import ReactImg from "../../../assets/react.svg";
import NodeImg from "../../../assets/node.svg";
import Fade from "react-reveal/Fade";
import FrontendComponent from "./serviseComponents/FrontendServise";
import FullStackComponent from "./serviseComponents/FullStackServise";
import BackendComponent from "./serviseComponents/BackendServise";

let Services = () => {
  return (
    <div className={Style.conteiner}>
      <div className={Style.title}>
        <h1>Services</h1>
      </div>
      <div className={Style.items}>

        <Fade left>
          <FrontendComponent ReactImg={ReactImg} />
        </Fade>

        <Fade bottom>
          <FullStackComponent DevelopImg={DevelopImg} />
        </Fade>

        <Fade right>
          <BackendComponent NodeImg={NodeImg} />
        </Fade>

      </div>
    </div>
  );
};

export default Services;
