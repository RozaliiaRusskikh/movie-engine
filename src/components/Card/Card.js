import Logo from "../../assets/movie-engine-logo.jpeg";
import "./Card.scss"


function Card() {
  return (
    <article className="card">
      <img className="card__img" src={Logo} alt="card"/> 
      <p className="card__title">Title</p>
    </article>
  );
}
export default Card;