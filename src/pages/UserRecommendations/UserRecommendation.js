import "./UserRecommendation.scss";
import Form from "../../components/Form/Form";
import MovieList from "../../components/MovieList/MovieList";

function UserRecommendation() {
  document.title = "Watch List";
  return (
    <main>
      <MovieList />
      <Form />
    </main>
  );
}

export default UserRecommendation;
