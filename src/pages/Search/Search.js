import './Search.css'
import Cabecalho from "../../components/home/Cabecalho/Cabecalho";
import Pesquisa from "../../components/home/Pesquisa/Pesquisa";
import Navbar from "../../components/home/Navbar/Navbar";
import BarraFiltro from '../../components/home/BarraFiltro/BarraFiltro';

function Search(){
    return(
        <>
            <Cabecalho/>
            <Pesquisa/>
            <BarraFiltro/>
            <Navbar/>
        </>
    );
}

export default Search;