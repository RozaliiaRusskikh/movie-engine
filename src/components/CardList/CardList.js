import Card from "../Card/Card";
import './CardList.scss'

function CardList() {
  return (
    <section className="movie">
      <h2 className="movie__genre">Comedy Movies</h2>
      <ul className="movie__list">
        <Card />
        <Card />
      </ul>
    </section>
  );
}
export default CardList;
