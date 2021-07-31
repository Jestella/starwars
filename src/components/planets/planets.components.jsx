import React from "react";
import "./planets.styles.scss";

const Planets = ({ data }) => (
  <div className="planets">
    <h1>Planets page</h1>
    {data.map((planets, i) => {
      return (
        <div className="planets_container">
          <h2>name: {planets.name}</h2>
          <p>rotation period: {planets.rotation_period}</p>
          <p>climate: {planets.arid}</p>
          <p>gravity: {planets.gravity}</p>
          <p>terrain: {planets.terrain}</p>
          <p>surface water: {planets.surface_water}</p>
          <p>population: {planets.polulation}</p>
        </div>
      );
    })}
  </div>
);

export default Planets;
