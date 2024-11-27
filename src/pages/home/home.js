import "./home.css";

import Cabecalho from "../../components/home/Cabecalho/Cabecalho";
import Pesquisa from "../../components/home/Pesquisa/Pesquisa";
import { useState } from "react";
import Navbar from "../../components/home/Navbar/Navbar";
import SearchCategoria from "../../components/search/SearchCategoria/SearchCategoria";
import MedicamentosList from "../../components/search/MedicamentosList/MedicamentosList";

function Home() {
  const [remedysState, setRemedysState] = useState(null);
  const [medicamentoNome, setMedicamentoNome] = useState("");

  return (
    <main className="principal">
      <Cabecalho />
      <Pesquisa setMedicamentoNome={setMedicamentoNome} medicamentoNome={medicamentoNome} remedysState={remedysState} setRemedysState={setRemedysState} />


      <Navbar setMedicamentoNome={setMedicamentoNome} />

      {remedysState ? (
        <>
          <SearchCategoria/>
          <MedicamentosList
            remedysState={remedysState}
            setRemedysState={setRemedysState}
          />
          
        </>
      ) : null}
    </main>
  );
}

export default Home;
