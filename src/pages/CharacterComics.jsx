import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CharacterComics = () => {
  const { characterId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--marvel-backend--txtnrrwcytwl.code.run/comics/${characterId}`
    );

    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <main className="main-comic-by-character">
      <div className="all-comics-by-characters">
        {data.comics.map((comic) => {
          const url =
            comic.thumbnail.path +
            "/" +
            "portrait_uncanny" +
            "." +
            comic.thumbnail.extension;

          return (
            <div className="card-container" key={comic._id}>
              <div
                className="comic-img"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
              <div>
                <h2>{comic.title}</h2>
              </div>
              <div>
                <p>{comic.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </main>
  );
};

export default CharacterComics;
