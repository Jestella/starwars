import React from "react";
import "./films.styles.scss";

const Films = ({ data }) => (
  <div className="films">
    <h1>Films page</h1>
    {data.map((films, i) => {
      return (
        <div className="films_container">
          <h2>title: {films.title}</h2>
          <p>episode: {films.episode_id}</p>
          <p>opening_crawl: {films.opening_crawl}</p>
          <p>director: {films.director}</p>
          <p>release_data: {films.release_data}</p>
          <p>characters: {films.characters}</p>
          <p>planets: {films.planets}</p>
        </div>
      );
    })}
  </div>
);

export default Films;
