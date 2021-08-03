import React from "react";
import "./species.styles.scss";

import SectionTitle from "../../components/section-title/section-title.component";
import List from "../../components/list/list.component";

const Species = ({ data }) => (
  <div className="species">
    <SectionTitle>SPECIES</SectionTitle>
    {data.map((species, i) => {
      return (
        <div className="species_container">
          <List>
            <h2>{species.name}</h2>
            <p>
              <strong>Classification:</strong> {species.classification}
            </p>
            <p>
              <strong>Designation:</strong> {species.designation}
            </p>
            <p>
              <strong>Average Height:</strong> {species.average_height}
            </p>
            <p>
              <strong>Skin Colors:</strong> {species.skin_colors}
            </p>
            <p>
              <strong>Hair Colors:</strong> {species.hair_colors}
            </p>
            <p>
              <strong>Eye Colors:</strong> {species.eye_colors}
            </p>
            <p>
              <strong>Language:</strong> {species.language}
            </p>
          </List>
        </div>
      );
    })}
  </div>
);

export default Species;
