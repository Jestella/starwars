import React from "react";
import "./films.styles.scss";
import SectionTitle from "../../components/section-title/section-title.component";
import List from "../../components/list/list.component";

const Films = ({ data }) => (
  <div className="films">
    <SectionTitle>FILMS </SectionTitle>
    {data.map((films, i) => {
      return (
        <div className="films_container">
          <List>
            <h2>{films.title}</h2>
            <p>
              <strong>Episode:</strong> {films.episode_id}
            </p>
            <p>
              <strong>Opening Crawl:</strong> {films.opening_crawl}
            </p>
            <p>
              <strong>Director:</strong>
              {films.director}
            </p>
            <p>
              <strong>Producer:</strong>
              {films.producer}
            </p>
            <p>
              <strong>Release Date:</strong> {films.release_date}
            </p>
            {/* <p>characters: {films.characters}</p> */}
          </List>
        </div>
      );
    })}
  </div>
);

export default Films;
