import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";

function Home() {
  document.title = "Smart Movie Engine";

  return (
    <div>
      <Hero />
      <CardList />
    </div>
  );
}

export default Home;
