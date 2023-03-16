import "./UserRecommendation.scss";
import Form from "../../components/Form/Form";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";

function UserRecommendation() {
  document.title = "Watch List";
  const [usersMovies, setUsersMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/movies").then((response) => {
      setUsersMovies(response.data);
    });
  }, []);

  if (!usersMovies) {
    return <h2>Loading</h2>;
  }

  function updateUsersMovieState(movies) {
    setUsersMovies(movies);
  }

  return (
    <main>
      <MovieList usersMovies={usersMovies} />
      <Form updateUsersMovieState={updateUsersMovieState} />
    </main>
  );
}

export default UserRecommendation;
