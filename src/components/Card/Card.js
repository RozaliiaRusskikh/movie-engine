import "./Card.scss";

function Card({ movie }) {
  return (
    <article className="card">
      <img
        className="card__img"
        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="card"
      />
      <p className="card__title">{movie.title}</p>
    </article>
  );
}
export default Card;
