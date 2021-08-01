import React from "react";
import "./section-title.styles.scss";

const SectionTitle = ({ children }) => (
  <div className="section_title_container">
    <h2 className="section_title">{children}</h2>
  </div>
);

export default SectionTitle;
