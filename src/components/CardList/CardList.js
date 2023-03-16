import Card from "../Card/Card";
import "./CardList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  getMoviesEndpointPopular,
  getMoviesEndpointAction,
  getMoviesEndpointComedy,
  getMoviesEndpointFamily,
  getMoviesEndpointHorror,
  getMoviesEndpointThriller,
} from "../../api-utils";

function CardList() {
  const [option, setOption] = useState("Popular");
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(getMoviesEndpointPopular).then((response) => {
      setMovies(response.data.results);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    switch (option) {
      case "Action":
        axios.get(getMoviesEndpointAction).then((response) => {
          setMovies(response.data.results);
          setIsLoading(false);
        });
        break;
      case "Comedy":
        axios.get(getMoviesEndpointComedy).then((response) => {
          setMovies(response.data.results);
          setIsLoading(false);
        });
        break;
      case "Family":
        axios.get(getMoviesEndpointFamily).then((response) => {
          setMovies(response.data.results);
          setIsLoading(false);
        });
        break;
      case "Horror":
        axios.get(getMoviesEndpointHorror).then((response) => {
          setMovies(response.data.results);
          setIsLoading(false);
        });
        break;
      case "Thriller":
        axios.get(getMoviesEndpointThriller).then((response) => {
          setMovies(response.data.results);
          setIsLoading(false);
        });
        break;
      default:
        axios.get(getMoviesEndpointPopular).then((response) => {
          setMovies(response.data.results);
          setIsLoading(false);
        });
    }
  }, [movies, option]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  function handleSelectChange(event) {
    setOption(event.target.value);
  }

  return (
    <section className="movie">
      <div className="movie__filter">
        <h2 className="movie__genre">{`Our ${option} Movie List`}</h2>
        <select
          className="movie__dropdown"
          name="movies"
          id="movies"
          value={option}
          onChange={handleSelectChange}
        >
          <option value="Popular">Popular Movies</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Family">Family</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>
      <ul className="movie__list">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </ul>
    </section>
  );
}
export default CardList;
