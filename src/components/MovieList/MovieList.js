import "./MovieList.scss";
import movieListImage from "../../assets/movie-list.jpeg";

function MovieList({ usersMovies }) {
  return (
    <section className="movie-list">
      <h2 className="movie-list__header">Movie Watchlist</h2>
      <div className="movie-list__description-image-container">
        <img
          className="movie-list__image"
          src={movieListImage}
          alt="movie list"
        />
        <p className="movie-list__description">
          Let's build a shared movie list together. <br /> Just add your
          favourite movie or film that you want to watch and everyone can see
          your recommendation
        </p>
      </div>
      <h3 className="movie-list__subheader">Users' Recommendations:</h3>
      <ul className="movie-list__list-container">
        {usersMovies.length > 0 ? (
          usersMovies.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </ul>
    </section>
  );
}
export default MovieList;
