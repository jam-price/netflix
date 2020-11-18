import React, { useEffect, useState } from "react";
import netflix from "../../Media/netflix.svg";
import "./Nav.css";
import avatar from "../../Media/avatar.png";
import Navmenu from "../Navmenu/Navmenu";
import Dropdown from "../Dropdown/Dropdown";

const Nav = () => {
  const [showBlackNav, setShowBlackNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // check window size everytime it's resized and set windowWidth state
  window.addEventListener("resize", () => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  });

  console.log(windowWidth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBlackNav(true);
      } else setShowBlackNav(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <nav className={showBlackNav === true ? "nav nav-black" : "nav"}>
        <img className="logo" src={netflix} alt="Netflix logo" />
        {windowWidth >= 885 ? <Navmenu /> : <Dropdown />}

        <img className="avatar" src={avatar} alt="Netflix Avatar" />
      </nav>
    </div>
  );
};

export default Nav;
