import "./Navbar.css";
import homeIcon from "../../assets/home-icon-selected.svg";
import historicoIcon from "../../assets/historico-icon.svg";
import acessibilidadeIcon from "../../assets/acessibilidade-icon.svg";

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
          <a href="historico">
            <img
              src={historicoIcon}
              alt="Botão Histórico em formato de relógio"
            ></img>
            <p>Histórico</p>
          </a>
        </div>

        <div className="icon">
          <a href="acessibilidade">
            <img
              src={acessibilidadeIcon}
              alt="Botão de Acessibilidade em formato de uma pessoa"
            ></img>
            <p>Acessibilidade</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
