import React, { createRef } from "react";
import Style from "../Services.module.scss";


let BackendComponent = (props) =>
{
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
        <img src={props.NodeImg} className={Style.icon} />
        <h5 className={Style.txt}>Backend-Developer</h5>
        <p className={Style.smText}>
          Backend-stack: PHP , Apache, phpMyAdmin, MySQL , MangoDB ,
          ExpressJS, NodeJS
        </p>
      </div>
    )
}

export default BackendComponent