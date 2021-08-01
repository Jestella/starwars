import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import Audio from "../../assets/Iamyourfather.mp3";
import DarthVader from "../../assets/darth_vader.png";

const Header = () => (
  <div className="header">
    <div className="header_container">
      <Link to="/">
        <div className="nav">
          <img src={DarthVader} className="darth_vader"></img>
        </div>
      </Link>
      <h1 className="header_title">
        STAR WARS <span>for</span>
        <br /> non STAR WARS fans
      </h1>
      <Link to="/films">
        <div className="nav">Films</div>
      </Link>
      <Link to="/people">
        <div className="nav">People</div>
      </Link>
      <Link to="/species">
        <div className="nav">Species</div>
      </Link>
      <Link to="planets">
        <div className="nav">Planets</div>
      </Link>
      <div>
        <audio controls src={Audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  </div>
);

export default Header;
