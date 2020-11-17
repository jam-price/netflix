import React, { useEffect, useState } from "react";
import netflix from "../../Media/netflix.svg";
import "./Nav.css";
import avatar from "../../Media/avatar.png";

const Nav = () => {

  const [showBlackNav, setShowBlackNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowBlackNav(true);
      } else setShowBlackNav(false);
    });
    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  return (
    <div>
      <nav className={showBlackNav === true ? "nav nav-black" : "nav" }>
        <img className="logo" src={netflix} alt="Netflix logo" />
        <img className="avatar" src={avatar} alt="Netflix Avatar" />
      </nav>
    </div>
  );
};

export default Nav;
