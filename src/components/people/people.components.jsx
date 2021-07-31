import React from "react";
import "./people.styles.scss";

const People = ({ data }) => (
  <div className="people">
    <h1>people page</h1>
    {data.map((people, i) => {
      return (
        <div className="people_container">
          <h2>name: {people.name}</h2>
          <p>genter: {people.gender}</p>
          <p>height: {people.height}</p>
          <p>mass: {people.mass}</p>
          <p>birth year: {people.birht_year}</p>
          <p>home world: {people.homeworld}</p>
          <p>films: {people.films}</p>
        </div>
      );
    })}
  </div>
);

export default People;
