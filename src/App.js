import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Search from "./pages/Search/Search";
import NotFound from "./pages/NotFound/NotFound";
import Config from "./pages/config/config";
import ModoDeExibicao from "./pages/config-options/modo-de-exibicao/modo-de-exibicao";
import IdiomaPage from "./pages/config-options/idioma/idiomaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={< Search/>} />
        <Route path="/config" element={<Config />} />
        <Route path="/Modo-de-exibição" element={<ModoDeExibicao />} />
        <Route path="/Idioma" element={<IdiomaPage />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
