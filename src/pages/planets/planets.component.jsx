import React from "react";
import "./planets.styles.scss";

import SectionTitle from "../../components/section-title/section-title.component";
import List from "../../components/list/list.component";

const Planets = ({ data }) => (
  <div className="planets">
    <SectionTitle>PLANET</SectionTitle>
    {data.map((planets, i) => {
      return (
        <div className="planets_container">
          <List>
            <h2>{planets.name}</h2>
            <p>
              <strong>Rotation Period:</strong> {planets.rotation_period}
            </p>
            <p>
              <strong>Climate:</strong> {planets.climate}
            </p>
            <p>
              <strong>Gravity:</strong> {planets.gravity}
            </p>
            <p>
              <strong>Terrain:</strong> {planets.terrain}
            </p>
            <p>
              <strong>Surface Water:</strong> {planets.surface_water}
            </p>
            <p>
              <strong>Population:</strong> {planets.population}
            </p>
          </List>
        </div>
      );
    })}
  </div>
);

export default Planets;
