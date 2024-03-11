import "./home.css";

import Cabecalho from "../../components/home/Cabecalho/Cabecalho";
import Pesquisa from "../../components/home/Pesquisa/Pesquisa";
import Categoria from "../../components/home/Categoria/Categoria";
import Carrossel1 from "../../components/home/Carrossel1";
import Carrossel2 from "../../components/home/Carrossel2";
import Carrossel3 from "../../components/home/Carrossel3";
import { useState } from "react";
import Title from "../../components/Title/Title";
import Carrossel from "../../components/Carrossel/Carrossel";
import Navbar from "../../components/home/Navbar/Navbar";
import SearchCategoria from "../../components/search/SearchCategoria/SearchCategoria";
import MedicamentosList from "../../components/search/MedicamentosList/MedicamentosList";

function Home() {
  const [remedysState, setRemedysState] = useState(null);

  return (
    <main className="principal">
      <Cabecalho />
      <Pesquisa remedysState={remedysState} setRemedysState={setRemedysState} />


      <Navbar />

      {remedysState ? (
        <>
          <SearchCategoria/>
          <MedicamentosList
            show={"ativo"}
            remedysState={remedysState}
            setRemedysState={setRemedysState}
          />
          
        </>
      ) : null}
    </main>
  );
}

export default Home;
