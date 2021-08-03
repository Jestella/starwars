import React from "react";
import "./people.styles.scss";

import SectionTitle from "../../components/section-title/section-title.component";
import List from "../../components/list/list.component";

const People = ({ data }) => (
  <div className="people">
    <SectionTitle>PEOPLE</SectionTitle>

    {data.map((people, i) => {
      return (
        <div className="people_container">
          <List>
            <h2>{people.name}</h2>
            <p>
              <strong>Gender:</strong> {people.gender}
            </p>
            <p>
              <strong>Height:</strong> {people.height}
            </p>
            <p>
              <strong>Mass:</strong> {people.mass}
            </p>
            <p>
              <strong>Birth Year:</strong> {people.birth_year}
            </p>
            <p>
              <strong>Skin Color:</strong> {people.skin_color}
            </p>
            <p>
              <strong>Hair Color:</strong> {people.hair_color}
            </p>
          </List>
        </div>
      );
    })}
  </div>
);

export default People;
