import React from "react";
import "./species.styles.scss";

import SectionTitle from "../section-title/section-title.component";
import List from "../list/list.component";

const Species = ({ data }) => (
  <div className="species">
    <SectionTitle>SPECIES</SectionTitle>
    {data.map((species, i) => {
      return (
        <div className="species_container">
          <List>
            <h2>{species.name}</h2>
            <p>classification: {species.classification}</p>
            <p>designation: {species.designation}</p>
            <p>average height: {species.average_height}</p>
            <p>skin colors: {species.skin_colors}</p>
            <p>hair colors: {species.hair_colors}</p>
            <p>eye colors: {species.eye_colors}</p>
            <p>language: {species.language}</p>
          </List>
        </div>
      );
    })}
  </div>
);

export default Species;
