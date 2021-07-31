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
          <span className="image_copyright">
            Image © Lucasfilm Ltd. (11), Charles Morgan Smith—Getty Images;
            Photo Illustration by Kenneth Bachor for TIME
            https://time.com/4788422/best-star-wars-moments/
          </span>
          <p>You don't really know about STAR WARS,</p>
          <p>but</p>
          <p>your boss does?</p>
          <p>or your coworkers?</p>
          <p>or your boyfriend? or girlfriend?</p>
          <p>Do you just want to pretend you know about STAR WARS?</p>
          <strong>I got you!</strong>
          <p>Here is some quick source of STAR WARS for you!</p>
          <p>
            Now you can join their conversation with a superficial knowledge you
            earn from here!
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
