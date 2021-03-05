import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <span className="navbar-brand">Watch Movies</span>
        </Link>
        <Link to="/action">
          <span className="navbar-brand">Action</span>
        </Link>
        <Link to="/comedy">
          <span className="navbar-brand">Comedy</span>
        </Link>
        <Link to="/thriller">
          <span className="navbar-brand">Thriller</span>
        </Link>
      </nav>
      <div className="container">
        <h2>
          <span className="world">World </span>
          <span className="movies">Movies</span>
        </h2>
      </div>
    </div>
  );
};
export default Header;
