import React, { useState, useEffect } from "react";

import "./Row.css";
import axios from "../../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/app";

const base_Url = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    dispatch(actions.playTrailerFromAnotherGenre(props.title));

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
            src={`${base_Url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerUrl && props.showTrailer ? (
        <YouTube videoId={trailerUrl} opts={opts} />
      ) : null}
    </div>
  );
}

export default Row;
