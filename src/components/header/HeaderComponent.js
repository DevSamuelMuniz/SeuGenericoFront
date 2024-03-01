import "./HeaderComponent.css"

import React from "react";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";

function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <main className="main-header">
      <div>
        <img className="logo-img" src={Logo} alt="logo" />
      </div>

      <div className="burger">
      <button onClick={toggleMenu} className="burger-menu">
        ☰
      </button>
      {isOpen && (
        <div className="menu-links">
          <a className="um" href="/">Minhas Finanças</a>
          <a className="dois" href="/">Orçamento Atual</a>
          <a className="tres" href="/">Ferramenta de Análise</a>
        </div>
      )}
    </div>
    </main>
  );
}

export default HeaderComponent;
