import React from "react";
import "./planets.styles.scss";

import SectionTitle from "../section-title/section-title.component";
import List from "../list/list.component";

const Planets = ({ data }) => (
  <div className="planets">
    <SectionTitle>PLANET</SectionTitle>
    {data.map((planets, i) => {
      return (
        <div className="planets_container">
          <List>
            <h2>{planets.name}</h2>
            <p>rotation period: {planets.rotation_period}</p>
            <p>climate: {planets.climate}</p>
            <p>gravity: {planets.gravity}</p>
            <p>terrain: {planets.terrain}</p>
            <p>surface water: {planets.surface_water}</p>
            <p>population: {planets.polulation}</p>
          </List>
        </div>
      );
    })}
  </div>
);

export default Planets;
