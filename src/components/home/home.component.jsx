import React from "react";
import "./home.styles.scss";

import starwarsImage from "../../assets/starwars.jpeg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="home_container">
          <img src={starwarsImage} className="home_image" />
          <h1>STAR WARS Page for non STAR WARS fans!</h1>
          <p>
            You don't really know about STAR WARS, but your boss does? or your
            coworkers? or boyfriend?
          </p>
          <p>Do you just want to pretend you know about STAR WARS?</p>
          <strong>I got you!</strong>
          <p>Here is some quick source of STAR WARS for you!</p>
          <p>
            Now you can join their conversation with a superficial knowledge you
            earned from here!
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
