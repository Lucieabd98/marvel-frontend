import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import SearchInput from "../assets/components/SearchInput";

const Comics = () => {
  const [data, setData] = useState({});
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/comics");
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
    <main className="main-comics">
      <div className="search">
        <SearchInput />
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
