import React, { useRef } from "react";
import Style from "./Services.module.scss";
import DevelopImg from '../../../assets/web-development.svg'


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
        >
          <img src={DevelopImg} className={Style.icon}/>
          <h5 className={Style.txt}>Web-developer</h5>
          <p className={Style.smText}>it. Nam odio veniam expedita aliquam laboriosam corrupti maxime? Adipisci enim ipsam quisquam quae placeat nisi. Ad maxime id at aut vitae magni.</p>


        </div>
        <div
          onMouseEnter={() => {
            changePosition(element2);
          }}
          onMouseLeave={() => {
            changePositionDown(element2);
          }}
          ref={element2}
        >
          <img src={DevelopImg} className={Style.icon}/>
          <h5 className={Style.txt}>Web-developer</h5>
          <p className={Style.smText}>it. Nam odio veniam expedita aliquam laboriosam corrupti maxime? Adipisci enim ipsam quisquam quae placeat nisi. Ad maxime id at aut vitae magni.</p>

        </div>
        <div
          onMouseEnter={() => {
            changePosition(element3);
          }}
          onMouseLeave={() => {
            changePositionDown(element3);
          }}
          ref={element3}
        >

<img src={DevelopImg} className={Style.icon}/>
          <h5 className={Style.txt}>Web-developer</h5>
          <p className={Style.smText}>it. Nam odio veniam expedita aliquam laboriosam corrupti maxime? Adipisci enim ipsam quisquam quae placeat nisi. Ad maxime id at aut vitae magni.</p>


        </div>
      </div>
    </div>
  );
};

export default Services;
