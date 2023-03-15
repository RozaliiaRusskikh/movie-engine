import RecommendedMovie from "../RecommendedMovie/RecommendedMovie"

function Hero() {
  return (
    <section>
      <h1>Don't know what to watch today? We can help with that</h1>
      <button>Find Movie</button>
      <RecommendedMovie />
    </section>
  );
}
export default Hero;
