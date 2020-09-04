import React from "react";
import Row from "./Row/Row";
import requests from "../../requests";
import { useSelector } from "react-redux";

function Rows() {
  const trailerGenre = useSelector((state) => state);
  return (
    <React.Fragment>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        showTrailer={trailerGenre === "NETFLIX ORIGINALS"}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        showTrailer={trailerGenre === "Trending Now"}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        showTrailer={trailerGenre === "Top Rated"}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        showTrailer={trailerGenre === "Action Movies"}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        showTrailer={trailerGenre === "Comedy Movies"}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        showTrailer={trailerGenre === "Horror Movies"}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        showTrailer={trailerGenre === "Romance Movies"}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        showTrailer={trailerGenre === "Documentaries"}
      />
    </React.Fragment>
  );
}

export default Rows;
