import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInputCharacters from "../assets/components/SearchInput";
import PaginationCharacters from "../assets/components/PaginationCharacters";

const Characters = ({
  input,
  setInput,
  pageNumberCharacter,
  setPageNumberCharacter,
  setMaxOfferCharacters,
  maxPagesCharacters,
}) => {
  // console.log(input);

  const [data, setData] = useState({});
  // console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3000/characters?" +
        "name=" +
        input +
        "&page=" +
        pageNumberCharacter
    );
    // console.log(response.data.results); --> un tableau avec chaque personnage à l'index i,
    // dont les clés sont .comics (tableau des comics); .description .name .thumbnail ._id
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

      <div className="all-characters">
        {data.map((character) => {
          const url =
            character.thumbnail.path +
            "/" +
            "standard_fantastic" +
            "." +
            character.thumbnail.extension;

          // console.log(character._id);

          return (
            <div key={character._id}>
              <div className="icon-heart">
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
          // console.log(url);
          // console.log(character);
        })}
      </div>
      <PaginationCharacters
        pageNumberCharacter={pageNumberCharacter}
        setPageNumberCharacter={setPageNumberCharacter}
        maxPagesCharacters={maxPagesCharacters}
      />
    </main>
  );
};

export default Characters;
