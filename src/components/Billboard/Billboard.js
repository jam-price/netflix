import React, { useEffect, useState } from "react";
import requests from "../../requests";
import "./Billboard.css";
import play from "../../Media/play.svg";
import info from "../../Media/info.svg";

function Billboard() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(requests.trending)
      .then((response) => response.json())
      .then((jsonResponse) =>
        setFilm(jsonResponse.results[Math.floor(Math.random() * 10)])
      )
      .then(console.log(film));
  }, []);

  return (
    <header
      className="billboard"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${film?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="billboard-description">
        {/* Background video on div */}
        <h2>{film.title}</h2>
        <div className="billboard-buttons">
          <button className="play-button button">
            <img src={play} alt="play" />
            Play
          </button>
          <button className="info-button button">
            <img src={info} alt="more information"/>
            More Info
          </button>
        </div>
        <p>{film.overview}</p>
      </div>
    </header>
  );
}

export default Billboard;