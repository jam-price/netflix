import React, { useState, useEffect } from "react";
import "./Row.css";

const Row = ({ title, request }) => {
  const [films, setFilms] = useState([]);

  const imgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    fetch(request)
      .then((response) => response.json())
      .then((jsonResponse) => setFilms(jsonResponse.results));
  }, [request]);

  console.log(films)

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="poster-row">
        {films.map((film) => {
          return (
            <img
              key={film.id}
              className={title === 'Netflix Originals' ? "poster_lrg": 'poster'}
              src={title === 'Netflix Originals'? imgUrl + film.poster_path : imgUrl + film.backdrop_path}
              alt={film.name ? film.name : film.original_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
