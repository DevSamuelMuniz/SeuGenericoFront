import "./Navbar.css";
import homeIcon from "../../../assets/home-icon-selected.svg";
import favoritosIcon from "../../../assets/favoritos-icon.svg";
import PesquisaVoz from "../PesquisaVoz/PesquisaVoz";

function Navbar() {
  return (
    <div
      className="navbar"
      style={{ position: "fixed", bottom: 0, zIndex: 1000 }}
    >
      <div className="container-navbar">
        <div className="icon">
          <a href="/">
            <img
              src={homeIcon}
              alt="Botão Tela inicial em formato de casa"
            ></img>
            <p>Tela inicial</p>
          </a>
        </div>

        <div className="icon">
            <PesquisaVoz></PesquisaVoz>
        </div>

        <div className="icon">
          <a href="favoritos">
            <img
              className="favorito-icon"
              src={favoritosIcon}
              alt="ícone de favoritos"
            ></img>
            <p>Favoritos</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
