import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInputComics from "../assets/components/SearchInputComics";
import PaginationComics from "../assets/components/PaginationComics";
import { useNavigate } from "react-router-dom";

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
  token,
}) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--marvel-backend--txtnrrwcytwl.code.run/comics?" +
        "title=" +
        inputComics +
        "&page=" +
        pageNumberComics
    );

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
                  if (!token) {
                    navigate("/login");
                  }

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
