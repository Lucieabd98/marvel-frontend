import logoMarvel from "../imgs/marvel-logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({
  setPageNumberCharacter,
  setPageNumberComics,
  setInput,
  setInputComics,
  token,
  handleToken,
}) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="top-header ">
        <div className="logo-container">
          <img src={logoMarvel} />
        </div>
      </div>

      <div className="bottom-header">
        <div className="navigation container">
          <div>
            <Link
              onClick={() => {
                setPageNumberCharacter(1);
                setInput("");
              }}
              to={"/"}
            >
              <button className="nav-button character-button">
                Characters
              </button>
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
        {!token ? (
          <div className="connection-buttons">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        ) : (
          <div className="disconnect-button">
            <button
              className="deconnect"
              onClick={() => {
                handleToken(null);
                navigate("/");
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
