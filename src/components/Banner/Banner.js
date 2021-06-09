import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../utils/axios.js';
import request from '../utils/request.js';
const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(request.fetchNetflixOriginals);
            setBanner(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            return response;
        }
        fetchdata();
    }, []);
    console.log('random movies is', banner);
    const truncate = (str, n) => str?.length > n ? str.substr(0, n - 1) + "..." : str;
    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner?.backdrop_path})`
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {banner?.title || banner?.name || banner?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(banner?.overview,150)}
                </h1>
            </div>
            <div className="banner_faded"/>
        </header>
    )
}

export default Banner;