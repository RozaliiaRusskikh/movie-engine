import RecommendedMovie from "../RecommendedMovie/RecommendedMovie";
import { useState } from "react";
import axios from "axios";
import "./Hero.scss";

function Hero() {
  const [findMovie, setFindMovie] = useState(false);
  const [filmOfTheDay, setFilmOfTheDay] = useState(null);
  const getFilmOfTheDay = () => {
    // axios.get(getMoviesEndpointAction).then((response) => {
    //   setFindMovie(true);
    // });
  };
  return (
    <section className="hero">
      <h1 className="hero__title">
        Don't know what to watch today? We can help with that
      </h1>
      <button onClick={getFilmOfTheDay} className="hero__button">
        Find Movie
      </button>
      {findMovie && <RecommendedMovie filmOfTheDay={filmOfTheDay} />}
    </section>
  );
}
export default Hero;
