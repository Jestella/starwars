import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <h1 className="header_title">
      STAR WARS <span>for</span> non STAR WARS fans!
    </h1>
    <div className="header_container">
      <Link to="/">
        <div className="nav">Home</div>
      </Link>
      <Link to="/films">
        <div className="nav">Films</div>
      </Link>
      <Link to="/people">
        <div className="nav">Characters</div>
      </Link>
      <Link to="planets">
        <div className="nav">Planets</div>
      </Link>
    </div>
  </div>
);

export default Header;
