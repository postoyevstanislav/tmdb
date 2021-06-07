import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MovieInfo } from "./MovieInfo/MovieInfo";
import { MovieList } from "./MovieList";
import { Nav } from "./Nav";

function App() {
  const apiKey = "b4e7239ec05624f521d3bafb199d0a05";

  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [searchInput, setSearchInput] = useState("");

  const handleSearchValue = (e) => {
    setSearchInput(e.target.value);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies([...data.results]);
      });
    setSearchInput("");
  };

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies([...data.results]);
      });
  };

  const getMovieInfo = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentMovie(data);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Router>
        <Nav
          value={searchInput}
          getMovies={getMovies}
          handleSearchValue={handleSearchValue}
          searchMovie={searchMovie}
        />

        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <MovieList movies={movies} handleMovieInfo={getMovieInfo} />
            )}
          />
          <Route
            path="/info"
            component={() => <MovieInfo currentMovie={currentMovie} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
