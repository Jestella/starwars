import React from "react";
import "./films.styles.scss";
import SectionTitle from "../section-title/section-title.component";
import List from "../list/list.component";

const Films = ({ data }) => (
  <div className="films">
    <SectionTitle>FILMS </SectionTitle>
    {data.map((films, i) => {
      return (
        <div className="films_container">
          <List>
            <h2>{films.title}</h2>
            <p>episode: {films.episode_id}</p>
            <p>opening_crawl: {films.opening_crawl}</p>
            <p>director: {films.director}</p>
            <p>release_data: {films.release_data}</p>
            {/* <p>characters: {films.characters}</p> */}
            <p>planets: {films.planets}</p>
          </List>
        </div>
      );
    })}
  </div>
);

export default Films;
