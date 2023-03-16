import "./RecommendedMovie.scss";

function RecommendedMovie({ filmOfTheDay }) {
  return (
    <section className="recommend">
      <p className="recommend__text">Film of the Day: </p>
      <h2 className="recommend__title">{filmOfTheDay.title}</h2>
    </section>
  );
}
export default RecommendedMovie;
