import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/NotFound/NotFound";
import Config from "./pages/config/config";
import ModoDeExibicao from "./pages/config-options/modo-de-exibicao/modo-de-exibicao";
import IdiomaPage from "./pages/config-options/idioma/idiomaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/Modo-de-exibição" element={<ModoDeExibicao />} />
        <Route path="/Idioma" element={<IdiomaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
