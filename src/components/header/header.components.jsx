import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="nav_home">Home</div>
    </Link>
    <Link to="/films">
      <div className="nav_films">Films</div>
    </Link>
    <Link to="/people">
      <div className="nav_people">PEOPLE</div>
    </Link>
    <Link to="planets">
      <div className="nav_planets">PLANETS</div>
    </Link>
  </div>
);

export default Header;
