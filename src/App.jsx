import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

// ====== IMPORT DES PAGES ET COMPONENTS ======= //

import Header from "./assets/components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import SingleCharacter from "./pages/SingleCharacter";
import Favorites from "./pages/Favorites";
import CharacterComics from "./pages/CharacterComics";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

// =============== FONCTION APP ================ //

function App() {
  const [input, setInput] = useState("");

  const [inputComics, setInputComics] = useState("");
  const [pageNumberCharacter, setPageNumberCharacter] = useState(1);
  const [pageNumberComics, setPageNumberComics] = useState(1);

  const [maxOfferCharacters, setMaxOfferCharacters] = useState();

  let maxPagesCharacters = Math.ceil(maxOfferCharacters / 100);

  const [maxComics, setMaxComics] = useState();
  let maxPagesComics = Math.ceil(maxComics / 100);

  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 10 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (Cookies.get("favorites")) {
      const favoritesFromCookie = JSON.parse(Cookies.get("favorites"));
      // console.log(favoritesFromCookie);
      setFavorites(favoritesFromCookie);
    }
  }, []);

  // console.log(favorites);

  const handleAddToFavorites = (comic) => {
    let updatedFavorites = [...favorites];
    updatedFavorites.push(comic);
    setFavorites(updatedFavorites);
    // console.log(updatedFavorites);
    Cookies.set("favorites", JSON.stringify(updatedFavorites), {
      expires: 10,
    });
  };

  let favoriteId = [];

  favorites.map((favorite) => {
    favoriteId.push(favorite.id);
  });

  const handleEraseFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 10 });
  };

  // console.log(favoriteId);

  // Cookies.getJSON("favorites");

  // const [red, setRed] = useState(false);

  return (
    <>
      <Router>
        <Header
          setPageNumberCharacter={setPageNumberCharacter}
          setPageNumberComics={setPageNumberComics}
          setInputComics={setInputComics}
          setInput={setInput}
          token={token}
          handleToken={handleToken}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                input={input}
                setInput={setInput}
                pageNumberCharacter={pageNumberCharacter}
                setPageNumberCharacter={setPageNumberCharacter}
                setMaxOfferCharacters={setMaxOfferCharacters}
                maxPagesCharacters={maxPagesCharacters}
                handleAddToFavorites={handleAddToFavorites}
                favorites={favorites}
                favoriteId={favoriteId}
                handleEraseFromFavorites={handleEraseFromFavorites}
                token={token}
              />
            }
          ></Route>
          <Route path="/character" element={<SingleCharacter />}></Route>
          <Route
            path="/comics"
            element={
              <Comics
                inputComics={inputComics}
                setInputComics={setInputComics}
                pageNumberComics={pageNumberComics}
                setPageNumberComics={setPageNumberComics}
                handleAddToFavorites={handleAddToFavorites}
                setMaxComics={setMaxComics}
                maxPagesComics={maxPagesComics}
                favoriteId={favoriteId}
                handleEraseFromFavorites={handleEraseFromFavorites}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          ></Route>
          <Route path="/comics/:characterId" element={<CharacterComics />} />
          <Route
            path="/signup"
            element={<SignUp handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
