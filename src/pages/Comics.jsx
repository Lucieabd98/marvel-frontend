import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInputComics from "../assets/components/SearchInputComics";

const Comics = ({ inputComics, setInputComics }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3000/comics?" + "title=" + inputComics
    );
    // console.log(response.data.results); --> un tableau avec chaque personnage à l'index i,
    // dont les clés sont .comics (tableau des comics); .description .name .thumbnail ._id
    setData(response.data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [inputComics]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-comics">
      <div className="search">
        <SearchInputComics
          inputComics={inputComics}
          setInputComics={setInputComics}
        />
      </div>
      <div className="all-comics">
        {data.map((comic) => {
          //   console.log(comic);
          const url =
            comic.thumbnail.path +
            "/" +
            "portrait_uncanny" +
            "." +
            comic.thumbnail.extension;
          //   console.log(url);

          return (
            <div className="one-comic-card" key={comic._id}>
              <div className="card-container">
                <div
                  className="comic-img"
                  style={{ backgroundImage: `url(${url})` }}
                >
                  <FontAwesomeIcon className="icon-heart" icon="heart" />
                  {/* <img src={url} alt="comic" /> */}
                </div>
                <div>
                  <h2>{comic.title}</h2>
                </div>
                <div>
                  <p>{comic.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Comics;
