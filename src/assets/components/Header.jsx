import logoMarvel from "../imgs/marvel-logo.png";
import { Link } from "react-router-dom";

const Header = ({
  setPageNumberCharacter,
  setPageNumberComics,
  setInput,
  setInputComics,
}) => {
  return (
    <header>
      <div className="logo red">
        <img src={logoMarvel} />
      </div>
      <div className="navigation container">
        <div>
          <Link
            onClick={() => {
              setPageNumberCharacter(1);
              setInput("");
            }}
            to={"/"}
          >
            <button className="nav-button character-button">Characters</button>
          </Link>
        </div>
        <div>
          <Link
            onClick={() => {
              setPageNumberComics(1);
              setInputComics("");
            }}
            to={"/comics"}
          >
            <button className="nav-button comic-button">Comics</button>
          </Link>
        </div>
        <div>
          <Link to={"/favorites"}>
            <button className="nav-button fav-button">Favorites</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
