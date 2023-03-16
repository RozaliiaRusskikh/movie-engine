import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ movies, genre }) {
  return (
    <section className="movie">
      <h2 className="movie__genre">{genre} Movies</h2>
      <ul className="movie__list">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </ul>
    </section>
  );
}
export default CardList;
