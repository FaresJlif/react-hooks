import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";

const MovieTrailer = ({ movies }) => {
    const { title } = useParams();
    const movie = movies.find((e) => e.title === title)

    const options = {
        height: "450",
        width: "800",
      };
  return (
    <div className="movie-container">
      <div style={{ margin: "2rem auto" }}>
        <Link style={{ textDecoration: "none",marginLeft:"1rem"}} to="/">
          <Button variant="outlined">
            Go back
          </Button>
        </Link>
      </div>
      <div>
        <div className="img_video">
          <img className="trailer__img" src={movie.posterURL} alt="poster" />
          <YouTube videoId={movie.videoURL} opts={options} />
        </div>
        <div className="trailer-descrp">
          <h3 style={{color:"red"}}>Description:</h3>
          <p style={{color:"white"}}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;