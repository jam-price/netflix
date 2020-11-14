import React, { useState, useEffect } from 'react';
import './Row.css'

const Row = ({ title, request }) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(request)
            .then(response => response.json())
            .then(jsonResponse => setFilms(jsonResponse.results))
            .then(console.log(films))
    }, [request])

    return (
        <div>
            <h2>{title}</h2>
            <div className="row">
                {films.map(film => {
                    return (
                        <div>
                            {/* <h3>{film.name? film.name : film.original_title}</h3> */}
                            <img
                            className='poster'
                                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                                alt={film.name? film.name : film.original_title}
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Row
