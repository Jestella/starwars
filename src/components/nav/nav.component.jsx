import React from "react";
import { Link } from "react-router-dom";

import "./nav.styles.scss";

import NavImg from "../../assets/nav.png";

const Nav = () => (
  <div className="nav">
    <Link to="/">
      <div className="nav_btn_container">
        <img src={NavImg} className="nav_img" />
      </div>
    </Link>

    <div className="nav_items">
      <Link to="/films">
        <div className="nav_item">Films</div>
      </Link>
      <Link to="/people">
        <div className="nav_item">People</div>
      </Link>
      <Link to="/species">
        <div className="nav_item">Species</div>
      </Link>
      <Link to="planets">
        <div className="nav_item">Planets</div>
      </Link>
      <div></div>
    </div>
  </div>
);

export default Nav;
