import React from "react";
import netflix from "../../Media/netflix.svg";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <a href="#top">
          <img src={netflix} alt="logo" />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
