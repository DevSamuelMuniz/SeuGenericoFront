import "./home.css";

import Cabecalho from "../../components/home/Cabecalho";
import Pesquisa from "../../components/home/Pesquisa";
import PesquisaVoz from "../../components/home/PesquisaVoz";
import CategoriaNome1 from "../../components/home/CategoriaNome1";
import Carrossel1 from "../../components/home/Carrossel1";
import CategoriaNome2 from "../../components/home/CategoriaNome2";
import Carrossel2 from "../../components/home/Carrossel2";
import CategoriaNome3 from "../../components/home/CategoriaNome3";
import Carrossel3 from "../../components/home/Carrossel3";
import { useState } from "react";
import Title from "../../components/Title/Title";
import Carrossel from "../../components/Carrossel/Carrossel";
import Navbar from "../../components/home/Navbar";

function Home() {
  const [remedysState, setRemedysState] = useState(null);

  return (
    <main className="principal">
      <Cabecalho />
      <Pesquisa remedysState={remedysState} setRemedysState={setRemedysState} />
      <PesquisaVoz />
      <Navbar />

      {remedysState ? (
        <>
          <Title categoria={"Medicamentos Ativos"} />
          <Carrossel
            show={"ativo"}
            remedysState={remedysState}
            setRemedysState={setRemedysState}
          />
          <Title categoria={"Medicamentos Inativos"} />
          <Carrossel
            show={"inativo"}
            remedysState={remedysState}
            setRemedysState={setRemedysState}
          />
        </>
      ) : null}
    </main>
  );
}

export default Home;
