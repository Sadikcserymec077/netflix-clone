
import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                // OMDB returns data in 'Search' array
                if (request.data.Search) {
                    setMovies(request.data.Search);
                } else if (request.data.Error) {
                    console.error("OMDB Error:", request.data.Error);
                }
                return request;
            } catch (error) {
                console.error("Failed to fetch movies for row:", title, error);

                // Fallback to mock data if API fails (e.g. ISP block)
                import("../../services/mockData").then((module) => {
                    const mockMovies = module.default;
                    // Shuffle or simulate different content per row
                    setMovies(mockMovies);
                });
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
                        // OMDB uses 'Poster' and 'Type'
                        // Only render if there is a poster
                        movie.Poster && movie.Poster !== "N/A" && (
                            <div
                                key={movie.imdbID || movie.id} // OMDB uses imdbID
                                className={`row__posterContainer ${isLargeRow && "row__posterContainerLarge"}`}
                            >
                                <img
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={movie.Poster} // OMDB gives full URL
                                    alt={movie.Title || movie.name}
                                />
                                <div className="row__posterName">
                                    {movie.Title || movie.name}
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
