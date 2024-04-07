import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInputCharacters from "../assets/components/SearchInput";
import PaginationCharacters from "../assets/components/PaginationCharacters";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Characters = ({
  input,
  setInput,
  pageNumberCharacter,
  setPageNumberCharacter,
  setMaxOfferCharacters,
  maxPagesCharacters,
  handleAddToFavorites,
  favoriteId,
  handleEraseFromFavorites,
  token,
}) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--marvel-backend--txtnrrwcytwl.code.run/characters?" +
        "name=" +
        input +
        "&page=" +
        pageNumberCharacter
    );

    setData(response.data.results);
    setMaxOfferCharacters(response.data.count);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [input, pageNumberCharacter]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-characters">
      <div className="header-characters">
        <div className="search">
          <h1>MARVEL CHARACTERS</h1>
          <SearchInputCharacters input={input} setInput={setInput} />
        </div>
      </div>
      <PaginationCharacters
        className="pagination-characters"
        pageNumberCharacter={pageNumberCharacter}
        setPageNumberCharacter={setPageNumberCharacter}
        maxPagesCharacters={maxPagesCharacters}
      />
      <div className="all-characters">
        {data.map((character, index) => {
          const url =
            character.thumbnail.path +
            "/" +
            "portrait_uncanny" +
            "." +
            character.thumbnail.extension;

          return (
            <div key={character._id}>
              <div
                className={
                  favoriteId.find((id) => id === character._id)
                    ? "icon-red"
                    : "icon-heart"
                }
                onClick={() => {
                  const characterToSend = {
                    type: "Character",
                    url: url,
                    title: character.name,
                    id: character._id,
                  };
                  if (!token) {
                    navigate("/login");
                  }

                  if (favoriteId.find((id) => id === character._id)) {
                    handleEraseFromFavorites(character._id);
                  } else {
                    handleAddToFavorites(characterToSend);
                  }
                }}
              >
                <FontAwesomeIcon icon="heart" />
              </div>
              <Link
                className="one-character-card"
                to={`/comics/${character._id}`}
              >
                <div className="card-container">
                  <div
                    className="character-img"
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  >
                    {/* <img src={url} alt="character" /> */}
                  </div>
                  <div>
                    <h2>{character.name}</h2>
                  </div>
                  {character.description && (
                    <div>
                      <p>{character.description}</p>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Characters;
