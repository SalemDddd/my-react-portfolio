import React, { useRef } from "react";
import Style from "./Services.module.scss";

let Services = () => {
  let element = useRef();
  let element2 = useRef();
  let element3 = useRef();
  let changePosition = (block) => {
    block.current.style.marginTop = "25px";
  };
  let changePositionDown = (block) => {
    block.current.style.marginTop = "50px";
  };
  return (
    <div className={Style.conteiner}>
      <div className={Style.title}>
        <h1>Services</h1>
      </div>

      <div className={Style.items}>
        <div
          onMouseEnter={() => {
            changePosition(element);
          }}
          onMouseLeave={() => {
            changePositionDown(element);
          }}
          ref={element}
        ></div>
        <div
          onMouseEnter={() => {
            changePosition(element2);
          }}
          onMouseLeave={() => {
            changePositionDown(element2);
          }}
          ref={element2}
        ></div>
        <div
          onMouseEnter={() => {
            changePosition(element3);
          }}
          onMouseLeave={() => {
            changePositionDown(element3);
          }}
          ref={element3}
        ></div>
      </div>
    </div>
  );
};

export default Services;
