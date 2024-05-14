import React, { useState, useEffect } from "react";
import "./splashScreen.css";

// Import image
import Logo from "../../assets/mini-logo.svg";

function SplashScreen() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textElement = document.querySelector(".text-splash");
    if (textElement) {
      if (logoVisible) {
        textElement.style.opacity = 1;
      } else {
        textElement.style.opacity = 0;
      }
    }
  }, [logoVisible]);

  return (
    <main className="content-splash">
      <img
        className={`img-splash ${logoVisible ? "show" : ""}`}
        src={Logo}
        alt=""
      />
      <h1 className="text-splash">Genérico Acessível</h1>
    </main>
  );
}

export default SplashScreen;
