import React, { useEffect, useState } from "react";
import netflix from "../../Media/netflix.svg";
import "./Nav.css";
import avatar from "../../Media/avatar.png";
import Navmenu from "../Navmenu/Navmenu";
import Dropdown from "../Dropdown/Dropdown";
import searchIcon from '../../Media/search.svg';
import present from '../../Media/present-box.svg';
import notification from '../../Media/notification.svg';

const Nav = () => {
  const [showBlackNav, setShowBlackNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  // check window size everytime it's resized and set windowWidth state
  useEffect(() => {
    window.addEventListener("resize", () => {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    )
    });
  })

  // show black navbar when scrolled down 100px
  const setNav = () => {
    if (window.scrollY > 100) {
        setShowBlackNav(true);
      } else setShowBlackNav(false);
  }

  // add event listener for scroll with setNav as function
  useEffect(() => {
    window.addEventListener("scroll", () => {
     setNav()
    });
    return () => {
      window.removeEventListener("scroll", setNav());
    };
  }, );

  return (
    <div>
      <nav className={showBlackNav === true ? "nav nav-black" : "nav"}>
        <img className="logo" src={netflix} alt="Netflix logo" />
        {windowWidth <= 885 ? <Dropdown /> : <Navmenu />}
        <div className="icons">
          <img className="searchIcon icon" src={searchIcon} alt='Search Icon'></img>
          <img className="presentIcon icon" src={present} alt='Present Icon'></img>
          <img className="notificationIcon icon" src={notification} alt='Notification Icon'></img>
        </div>
        <img className="avatar" src={avatar} alt="Netflix Avatar" />
      </nav>
    </div>
  );
};

export default Nav;
