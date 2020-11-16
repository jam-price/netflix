import React from "react";
import netflix from "../../Media/netflix.svg";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div>
      <nav className='nav'>
        <a className="logo" href="#top">
          <img src={netflix} alt="logo" />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
