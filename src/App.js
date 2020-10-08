import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />

      <Row
        title="Netfilx Originals"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTranding} />
      <Row title="Top Rated" fetchUrl={requests.fethTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fectchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fectchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fectchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fectchRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fectchDocumentaries} />
    </div>
  );
}

export default App;

////api====799e22d5f2a05f3d0d48ae8aaf8aa251
