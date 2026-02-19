
import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import requests from "../../services/requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // OMDB search for 'stranger things' or generic
                const request = await axios.get(requests.fetchNetflixOriginals);

                if (request.data.Search && request.data.Search.length > 0) {
                    // Pick a random movie from the search result
                    setMovie(
                        request.data.Search[
                        Math.floor(Math.random() * request.data.Search.length)
                        ]
                    );
                }

            } catch (error) {
                console.error("Failed to fetch banner movie:", error);

                // Fallback to mock data
                import("../../services/mockData").then((module) => {
                    const mockMovies = module.default;
                    setMovie(mockMovies[Math.floor(Math.random() * mockMovies.length)]);
                });
            }
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "${movie?.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg'}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.Title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {/* OMDB Search result doesn't give full Plot/Overview, only Detail does. 
                        We might just show 'Click to see more' or handle empty string if not available */}
                    {truncate(movie?.Plot || movie?.overview || "Watch this amazing title now on Netflix.", 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
