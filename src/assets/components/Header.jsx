import logoMarvel from "../imgs/marvel-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo red">
        <img src={logoMarvel} />
      </div>
      <div className="navigation container">
        <div>
          <Link to={"/"}>
            <button className="nav-button">Characters</button>
          </Link>
        </div>
        <div>
          <Link to={"/comics"}>
            <button className="nav-button">Comics</button>
          </Link>
        </div>
        <div>
          <Link to={"/favorites"}>
            <button className="nav-button">Favorites</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;