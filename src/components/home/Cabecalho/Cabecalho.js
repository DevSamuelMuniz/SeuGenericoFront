import "./Cabecalho.css";
import logo from "../../../assets/mini-logo.svg";
import config from "../../../assets/config-btn.svg";


function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container-cabecalho">
         <a className="mini-logo" href="/"> {/*ajustar rota */}
          <img src={logo} alt="Logo Seu Genérico" />
          <div className="perfil-wrapper">
            <p className="cumprimento">Bem-vindo</p>
            <p className="nome">Usuário</p>
          </div>
        </a>
        <a className="config-btn" href="/">
          {/* <img src={config} alt="Botão de configurações" /> */}
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;
