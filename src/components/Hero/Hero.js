import RecommendedMovie from "../RecommendedMovie/RecommendedMovie"
import "./Hero.scss"

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Don't know what to watch today? We can help with that</h1>
      <button className="hero__button">Find Movie</button>
      <RecommendedMovie />
    </section>
  );
}
export default Hero;
