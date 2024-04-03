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

// =============== FONCTION APP ================ //

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/character" element={<SingleCharacter />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/comics/:characterId" element={<CharacterComics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
