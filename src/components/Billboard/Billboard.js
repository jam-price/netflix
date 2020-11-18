import React, { useEffect, useState } from "react";
import requests from "../../requests";
import "./Billboard.css";
import play from "../../Media/play.svg";
import info from "../../Media/info.svg";

function Billboard() {
  const [film, setFilm] = useState([]);
  const [randomFont, setRandomFont] = useState('');

  // set random font for title
  useEffect(() => {
    const fonts = [
    '"Big Shoulders Stencil Display", cursive;',
    'Impact, Charcoal, sans-serif',
    '"Courier New", Courier, monospace',
    '"Arial Black", Gadget, sans-serif',
    'American Typewriter, serif',
    '"Cinzel", serif',
    '"Gloria Hallelujah", cursive',
    '"Modak", cursive',
    '"Pacifico", cursive',
    '"Pangolin", cursive'
  ];
  
    setRandomFont(fonts[Math.floor(Math.random()* fonts.length)]);
  }, [])

  useEffect(() => {
    fetch(requests.trending)
      .then((response) => response.json())
      .then((jsonResponse) =>
        setFilm(jsonResponse.results[Math.floor(Math.random() * 10)])
      )
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
        <h2 style={{fontFamily:randomFont}}>{film?.title || film?.original_title || film?.name}</h2>
        <div className="overview">
          <p>{film.overview}</p>
        </div>
        <div className="billboard-buttons">
          <button className="play-button button">
            <img src={play} alt="play" />
            Play
          </button>
          <button className="info-button button">
            <img src={info} alt="more information" />
            More Info
          </button>
        </div>
        
      </div>

      <div className="bottom-fade"></div>
    </header>
  );
}

export default Billboard;
