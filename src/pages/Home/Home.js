import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { getMoviesEndpointPopular } from "../../api-utils";
import CardList from "../../components/CardList/CardList";
import { useState, useEffect } from "react";

function Home() {
  document.title = "Smart Movie Engine";

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState("Popular");

  useEffect(() => {
    axios.get(getMoviesEndpointPopular).then((response) => {
      setMovies(response.data.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Hero />
      <CardList movies={movies} genre={genre} />
    </div>
  );
}

export default Home;
