import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import SearchInput from "../assets/components/SearchInput";

const Characters = () => {
  const [data, setData] = useState({});
  // console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/characters");
    // console.log(response.data.results); --> un tableau avec chaque personnage à l'index i,
    // dont les clés sont .comics (tableau des comics); .description .name .thumbnail ._id
    setData(response.data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-characters">
      <div className="search">
        <SearchInput />
      </div>
      <div className="all-characters">
        {data.map((character) => {
          const url =
            character.thumbnail.path +
            "/" +
            "portrait_incredible" +
            "." +
            character.thumbnail.extension;

          // console.log(character._id);

          return (
            <Link
              key={character._id}
              className="one-character-card"
              to={`/comics/${character._id}`}
            >
              <div className="card-container">
                <div
                  className="character-img"
                  style={{ backgroundImage: `url(${url})` }}
                >
                  {/* <img src={url} alt="character" /> */}
                </div>
                <div className={!character.description && "center"}>
                  <h2>{character.name}</h2>
                </div>
                {character.description && (
                  <div>
                    <p>{character.description}</p>
                  </div>
                )}
              </div>
            </Link>
          );
          // console.log(url);
          // console.log(character);
        })}
      </div>
    </main>
  );
};

export default Characters;
