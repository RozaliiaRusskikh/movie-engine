import Logo from "../../assets/movie-engine-logo.jpeg";
import "./Header.scss"
import { Link } from "react-router-dom";

function Header() {
  return (
      <header className="header">
        <Link to='/'><img className="header__logo" src={Logo} alt="movie engine logo" /></Link>
        <div className="header__container">        
          <select className="header__dropdown" name="movies" id="movies">
            <option value="popular">Popular movies</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="family">Family</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
          </select>
          <Link to='/user-recommendations'>
          <button className="header__button">User Recommendations</button>
          </Link>
        </div>      
      </header>
  );
}
export default Header;
