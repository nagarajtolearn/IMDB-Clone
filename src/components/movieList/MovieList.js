import React, { useState, useEffect } from "react";
import "./MovieList.css";

import Card from "../card/Card";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4be6ef9ebfa768b47ed2cbb7d6941a98&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4be6ef9ebfa768b47ed2cbb7d6941a98&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.log(error));
    };
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPOLAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
