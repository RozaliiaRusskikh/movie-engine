import Logo from "../../assets/movie-engine-logo.jpeg";

function Card() {
  return (
    <article>
      <img src={Logo} alt="card"/> 
      <p>Title</p>
    </article>
  );
}
export default Card;