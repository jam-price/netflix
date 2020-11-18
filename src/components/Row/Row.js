import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // fill
      autoplay: 1,
    }
  }

  const handleClick = (film) => {
    const title = film.name ? film.name : film.original_title;
    console.log(title);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(title).then(res => setTrailerUrl(res)).catch(console.error)
    }
  }

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
        {/* Can't get the below to work */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
          {/* so */}
          {/* {trailerUrl ? <video width="100%" height="auto" autoPlay src={trailerUrl} controls>
          </video> : <div>No Trailer</div>} */}
    </div>
  );
};

export default Row;
