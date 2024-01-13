import './Cabecalho.css';
import ajuda from '../../assets/ajuda-btn.svg';
import logo from '../../assets/mini-logo.svg';
import config from '../../assets/config-btn.svg';

function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="container-cabecalho">
                <a className="ajuda-btn" href=""><img src={ajuda} alt="Botão de ajuda" /></a>
                <a className="mini-logo" href=""><img src={logo} alt="Logo Seu Genérico" /></a>
                <a className="config-btn" href=""><img src={config} alt="Botão de configurações" /></a>
            </div>
        </header>
    )
}

export default Cabecalho;