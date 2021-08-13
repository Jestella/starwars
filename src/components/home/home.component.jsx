import React from "react";
import "./home.styles.scss";

import Main from "../main/main.component";
import Footer from "../footer/footer.component";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
