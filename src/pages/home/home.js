import "./home.css";

import Cabecalho from "../../components/home/Cabecalho/Cabecalho";
import Pesquisa from "../../components/home/Pesquisa/Pesquisa";
import { useState } from "react";
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
