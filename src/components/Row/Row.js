import React, { useState, useEffect } from "react";
import "./Row.css";
import movieTrailer from 'movie-trailer'

const Row = ({ title, request }) => {
  const [films, setFilms] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState()

  const imgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    fetch(request)
      .then((response) => response.json())
      .then((jsonResponse) => setFilms(jsonResponse.results));
  }, [request]);

  const handleClick = (film) => {
    const title = film.name ? film.name : film.original_title;
    console.log(title);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(title).then(result => {
        console.log(result)
        let editedResult = result.replace('watch', 'embed')
        setTrailerUrl(editedResult)
      }).catch(console.error)
    }
  }

  console.log(trailerUrl)

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="poster-row">
        {films.map((film) => {
          return (
            <img
              onClick={() => handleClick(film)}
              key={film.id}
              className={title === 'Netflix Originals' ? "poster_lrg": 'poster'}
              src={title === 'Netflix Originals'? imgUrl + film.poster_path : imgUrl + film.backdrop_path}
              alt={film.name ? film.name : film.original_title}
            />
          );
        })}
      </div>
          {trailerUrl ? <iframe title={trailerUrl} width="100%" height="auto" autoPlay src={trailerUrl} controls>
          </iframe> : <div>No Trailer</div>}
    </div>
  );
};

export default Row;
