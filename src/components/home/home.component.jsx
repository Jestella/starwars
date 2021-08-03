import React from "react";
import "./home.styles.scss";

import Nav from "../nav/nav.component";
import Main from "../main/main.component";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default Home;
