import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInputComics from "../assets/components/SearchInputComics";
import PaginationComics from "../assets/components/PaginationComics";

const Comics = ({
  inputComics,
  setInputComics,
  pageNumberComics,
  setPageNumberComics,
}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3000/comics?" +
        "title=" +
        inputComics +
        "&page=" +
        pageNumberComics
    );
    // console.log(response.data.results); --> un tableau avec chaque personnage à l'index i,
    // dont les clés sont .comics (tableau des comics); .description .name .thumbnail ._id
    setData(response.data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [inputComics, pageNumberComics]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-comics">
      <div className="header-comics">
        <div className="search">
          <h1>MARVEL COMICS</h1>
          <SearchInputComics
            inputComics={inputComics}
            setInputComics={setInputComics}
          />
        </div>
      </div>

      <div className="all-comics">
        {data.map((comic) => {
          //   console.log(comic);
          const url =
            comic.thumbnail.path +
            "/" +
            "standard_fantastic" +
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
      <PaginationComics
        pageNumberComics={pageNumberComics}
        setPageNumberComics={setPageNumberComics}
      />
    </main>
  );
};

export default Comics;
