import React, { createRef } from "react";
import Style from "../Services.module.scss";

let FullStackComponent = (props) => {
  const block = createRef();
  let changePosition = (e) => {
    e.current.parentElement.style.marginTop = "25px";
  };
  let changePositionDown = (e) => {
    e.current.parentElement.style.marginTop = "50px";
  };

  return (
    <div
      ref={block}
      onMouseEnter={() => {
        changePosition(block);
      }}
      onMouseLeave={() => {
        changePositionDown(block);
      }}
    >
      <img src={props.DevelopImg} className={Style.icon} />
      <h5 className={Style.txt}>Web-developer</h5>
      <p className={Style.smText}>
        I'm fullstack MERN developer: MangoDB , ExpressJS, ReactJS, NodeJS
      </p>
    </div>
  );
};

export default FullStackComponent;
