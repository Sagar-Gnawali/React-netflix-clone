import './Row.css';
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios.js';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseUrl = 'https://image.tmdb.org/t/p/original/';
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movie, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [fetchUrl]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }
    const handleClick = (item) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            console.log('item is', item.name)
            movieTrailer(item?.name || item?.title || item?.original_name || "")
                .then(url => {
                    console.log('url is', url)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {

                })
        }
    }
    return (
        <div className="row">
            {/* Title  */}
            {/* container inside this we have posters */}
            <h2>{title}</h2>
            <div className="row_posters">
                {/* sever row posters */}
                {
                    movie.map((item) => (
                        <img
                            onClick={() => handleClick(item)}
                            key={item.id}
                            src={`${baseUrl}${isLargeRow ? item.poster_path : item.backdrop_path}`}
                            alt={item.name}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        />
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
