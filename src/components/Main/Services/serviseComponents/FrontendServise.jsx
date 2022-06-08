import React, { createRef } from "react";
import Style from "../Services.module.scss";


let frontendComponent = (props) => {
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
        <img src={props.ReactImg} className={Style.icon} />
        <h5 className={Style.txt}>Frontend-Developer</h5>
        <p className={Style.smText}>
          {" "}
          My frontend stack: HTML, CSS , JavaScript, ReactJS, REDUX, REST
          API, Leaflet JS, SCSS
        </p>
      </div>
    ) 
}


export default frontendComponent