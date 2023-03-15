import Logo from "../../assets/movie-engine-logo.jpeg";

function Header() {
  return (
    <header>
      <img src={Logo} alt="movie engine logo" />
      <select name="movies" id="movies">
        <option value="popular">Popular movies</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="family">Family</option>
        <option value="horror">Horror</option>
        <option value="thriller">Thriller</option>
      </select>
      <button>User Recommendations</button>
    </header>
  );
}
export default Header;
