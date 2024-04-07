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
  handleAddToFavorites,
  setMaxComics,
  maxPagesComics,
  favoriteId,
  handleEraseFromFavorites,
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
    setMaxComics(response.data.count);
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
      <PaginationComics
        className="pagination-comics"
        pageNumberComics={pageNumberComics}
        setPageNumberComics={setPageNumberComics}
        maxPagesComics={maxPagesComics}
      />
      <div className="all-comics">
        {data.map((comic, index) => {
          const url =
            comic.thumbnail.path +
            "/" +
            "standard_fantastic" +
            "." +
            comic.thumbnail.extension;
          //   console.log(url);

          return (
            <div className="one-comic-card" key={comic._id}>
              <div
                className={
                  favoriteId.find((id) => id === comic._id)
                    ? "icon-red"
                    : "icon-heart"
                }
                onClick={() => {
                  const comicToSend = {
                    type: "Comic",
                    url: url,
                    title: comic.title,
                    id: comic._id,
                  };
                  if (favoriteId.find((id) => id === comic._id)) {
                    handleEraseFromFavorites(comic._id);
                  } else {
                    handleAddToFavorites(comicToSend);
                  }
                }}
              >
                <FontAwesomeIcon icon="heart" />
              </div>
              <div className="card-container">
                <div
                  className="comic-img"
                  style={{ backgroundImage: `url(${url})` }}
                >
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
