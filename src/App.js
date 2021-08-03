import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

import "./App.css";

import Nav from "../src/components/nav/nav.component";
import Home from "../src/components/home/home.component";
import Films from "./pages//films/films.component";
import People from "../src/pages/people/people.component";
import Planets from "../src/pages//planets/planets.component";
import Species from "./pages//species/species.component";

function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films/");
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchSpecies() {
      let res = await fetch("https://swapi.dev/api/species/");
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchFilms();
    fetchPeople();
    fetchSpecies();
    fetchPlanets();
  }, []);
  return (
    <div className="app">
      <Router>
        <Nav />
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/films">
              <Films data={films} />
            </Route>
            <Route exact path="/people">
              <People data={people} />
            </Route>
            <Route exact path="/species">
              <Species data={species} />
            </Route>
            <Route exact path="/planets">
              <Planets data={planets} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
