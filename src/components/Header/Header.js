import Logo from "../../assets/movie-engine-logo.jpeg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="movie engine logo" />
      </Link>
      <Link to="/user-recommendations">
        <button className="header__button">User Recommendations</button>
      </Link>
    </header>
  );
}
export default Header;
