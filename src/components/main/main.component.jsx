import React from "react";
import "./main.styles.scss";

import starwarsImage from "../../assets/starwars2.jpeg";
import Audio from "../../assets/Iamyourfather.mp3";
import STARWARS from "../../assets/starwars_logo.png";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div className="main_top">
          <h1 className="title">
            <img src={STARWARS} className="STARWARS" /> FOR NON STAR WARS FANS
          </h1>
          <p>
            You don't really know about STAR WARS, but your boss or coworkers or
            boyfriend? or girlfriend does? <br />
            Maybe you just want to sound like a STAR WARS fan?{" "}
            <strong>I GOT YOUR BACK!</strong> Here is some information about
            STAR WARS for you. Now you can join their conversation with a
            superficial knowledge you earn from here!
            <br />
            <audio controls src={Audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </p>
        </div>
        <div className="main_bottom">
          <div className="image_container">
            <img src={starwarsImage} className="main_image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
