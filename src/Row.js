import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
  
  ///fetch movie information from themoviedb api
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //"https://api.themoviedb.org/3/{fetchUrl=>>>requests.fetchNetflixOriginal}"
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //loads each time fetchUrl changes.if [empty] run once when row loads and dont run again

 // console.log(movies);

 //fecth trailer from youtube using movie-trailer api
  const handleClick=(movie)=>{
  //  console.log(movie?.title + "clicked")
  //  console.log(trailerUrl);

    if(trailerUrl){
      console.log(trailerUrl);
      setTrailerUrl("");
      console.log("after setTrailer set to null>>>" +trailerUrl);
    }else{
      movieTrailer(movie?.original_title || movie?.title || movie?.name)
       .then(url =>{
         const  urlParams= new URLSearchParams (new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
       })
       .catch((error) => console.log("trailer fetching error>>>" + error));
    }
  }
  //pop out youtube player options
  const opts = {
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
