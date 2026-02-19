
import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            } catch (error) {
                console.error("Failed to fetch movies for row:", title, error);
                setMovies([]);
            }
        }
        fetchData();
    }, [fetchUrl, title]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <div
                                key={movie.id}
                                className={`row__posterContainer ${isLargeRow && "row__posterContainerLarge"}`}
                            >
                                <img
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                        }`}
                                    alt={movie.name || movie.title || movie.original_name}
                                />
                                <div className="row__posterName">
                                    {movie.name || movie.title || movie.original_name}
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
