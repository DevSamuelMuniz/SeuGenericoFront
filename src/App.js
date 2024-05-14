import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/NotFound/NotFound";
import Config from "./pages/config/config";
import ModoDeExibicao from "./pages/config-options/modo-de-exibicao/modo-de-exibicao";
import IdiomaPage from "./pages/config-options/idioma/idiomaPage";
import SplashScreen from "./pages/splashScreen/splashScreen.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/config" element={<Config />} />
          <Route path="/Modo-de-exibição" element={<ModoDeExibicao />} />
          <Route path="/Idioma" element={<IdiomaPage />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
