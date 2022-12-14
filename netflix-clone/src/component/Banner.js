import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import requests from "../utils/firestore";
import "../styles/Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      const { data: request } = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.results[Math.floor(Math.random() * request.results.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n -1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          ${base_url}${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* discription */}
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"/>

    </header>
  );
}

export default Banner;
