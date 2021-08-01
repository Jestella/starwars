import React from "react";
import "./planets.styles.scss";

import SectionTitle from "../section-title/section-title.components";
import List from "../list/list.component";

const Planets = ({ data }) => (
  <div className="planets">
    <SectionTitle>Planets page</SectionTitle>
    {data.map((planets, i) => {
      return (
        <div className="planets_container">
          <List>
            <h2>name: {planets.name}</h2>
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
