import "./MovieList.scss";
import movieListImage from "../../assets/movie-list.jpeg";

function MovieList() {
  return (
    <section className="movie-list">
      <h2 className="movie-list__header">Movie watchlist</h2>
      <div className="movie-list__description-image-container">
        <img
          className="movie-list__image"
          src={movieListImage}
          alt="movie list"
        />
        <p className="movie-list__description">
          Let's build a shared movie list together. <br/> Just add your favourite
          movie or film that you want to watch and everyone can see your
          suggestion and take your advice
        </p>
      </div>
      <h3 className="movie-list__subheader">Users's Recommendations:</h3>
      <ul className="movie-list__list-container">
        <li>Movie1 Name</li>
        <li>Movie2 Name</li>
        <li>Movie3 Name</li>
        <li>Movie4 Name</li>
        <li>Movie5 Name</li>
      </ul>
    </section>
  );
}
export default MovieList;
