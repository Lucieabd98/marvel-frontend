import React from "react";
import { useState } from "react";
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

  return (
    <>
      <Router>
        <Header
          setPageNumberCharacter={setPageNumberCharacter}
          setPageNumberComics={setPageNumberComics}
          setInputComics={setInputComics}
          setInput={setInput}
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
              />
            }
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/comics/:characterId" element={<CharacterComics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
