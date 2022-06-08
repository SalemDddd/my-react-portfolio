import React, { useEffect, useState } from "react";
import Styles from "./NavBar.module.scss";
import HomeImg from "../../assets/Home.svg";
import AboutImg from "../../assets/About.svg";
import ServicesImg from "../../assets/Services.svg";
import ExperienceImg from "../../assets/Experience.svg";
import WorksImg from "../../assets/Works.svg";
import BlogImg from "../../assets/Blog.svg";
import ContactImg from "../../assets/Contact.svg";
import MePresentPage from "../Main/MePresentPage/MePresentPage";
import AboutPage from "../Main/About/About";

let MenuButtons = () => {
  const [pos, setPos] = useState({position : 0});
  let i =0;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);
  useEffect(() =>
  {
    console.log(pos)
  }, [pos])
  let handleScroll = () => {
    setPos(prev => {return {...prev , position : window.scrollY / window.innerHeight}});
  };
  return (
    <ul className={Styles.menu}>
      {/* (Pos < 1 ? `${Styles.active}` : null) */}
      <li className={`${Styles.Home} `}>
        <div>
          <img src={HomeImg} height={"20px"} alt="Home Page" />
          <a href={"#"} onClick={MePresentPage} className={`${Styles.href} ${pos.position < 0.5 ? Styles.active : null}`  }>
            Home
          </a>
        </div>
      </li>

      <li className={`${Styles.About}`}>
        <div>
          <img src={AboutImg} height={"20px"} alt="About Page" />
          <a
            href={"#AboutPage"}
            onClick={AboutPage}
            className={`${Styles.href} ${(pos.position >= 0.5)&& (pos.position <1.4) ? Styles.active : null}`}
          >
            About
          </a>
        </div>
      </li>

      <li className={`${Styles.Services}`}>
        <div>
          <img src={ServicesImg} height={"20px"} alt="Services Page" />
          <a href="#" className={`${Styles.href} ${(pos.position > 1.4) && (pos.position < 2) ? Styles.active : null}`}>
            Services
          </a>
        </div>
      </li>

      <li className={`${Styles.Experience}`}>
        <div>
          <img src={ExperienceImg} height={"20px"} alt="Experience Page" />
          <a href="#" className={`${Styles.href}`}>
            Experience
          </a>
        </div>
      </li>

      <li className={`${Styles.Works}`}>
        <div>
          <img src={WorksImg} height={"20px"} alt="Works Page" />
          <a href="#" className={`${Styles.href}`}>
            Works
          </a>
        </div>
      </li>

      <li className={`${Styles.Blog}`}>
        <div>
          <img src={BlogImg} height={"20px"} alt="Blog Page" />
          <a href="#" className={`${Styles.href}`}>
            Blog
          </a>
        </div>
      </li>

      <li className={`${Styles.Contact}`}>
        <div>
          <img src={ContactImg} height={"20px"} alt="Contact Page" />
          <a href="#" className={`${Styles.href}`}>
            Contact
          </a>
        </div>
      </li>
    </ul>
  );
};

export default MenuButtons;
