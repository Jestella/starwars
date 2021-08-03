import React from "react";
import "./people.styles.scss";

import SectionTitle from "../section-title/section-title.component";
import List from "../list/list.component";

const People = ({ data }) => (
  <div className="people">
    <SectionTitle>PEOPLE</SectionTitle>

    {data.map((people, i) => {
      return (
        <div className="people_container">
          <List>
            <h2>{people.name}</h2>
            <p>genter: {people.gender}</p>
            <p>height: {people.height}</p>
            <p>mass: {people.mass}</p>
            <p>birth year: {people.birth_year}</p>
            <p>home world: {people.homeworld}</p>
            <p>films: {people.films}</p>
          </List>
        </div>
      );
    })}
  </div>
);

export default People;
