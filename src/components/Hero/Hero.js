import RecommendedMovie from "../RecommendedMovie/RecommendedMovie";
import { useState } from "react";
import axios from "axios";
import "./Hero.scss";
import { API_URL, API_KEY } from "../../api-utils";

function Hero() {
  const [findMovie, setFindMovie] = useState(false);
  const [filmOfTheDay, setFilmOfTheDay] = useState(null);
  function getFilmOfTheDay() {
    function getRandomNumber() {
      return Math.floor(Math.random() * (1000 - 100 + 1) + 100);
    }
    axios
      .get(API_URL + "/movie/" + getRandomNumber() + API_KEY)
      .then((response) => {
        setFilmOfTheDay(response.data);
        setFindMovie(true);
      })
      .catch((error) => {
        console.log("Issue with API:", error.message);
      });
  }

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
