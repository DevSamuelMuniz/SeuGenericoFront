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

function Home() {
  const [remedysState, setRemedysState] = useState(null);

  return (
    <main className="principal">
      <Cabecalho />
      <Pesquisa remedysState={remedysState} setRemedysState={setRemedysState} />

      {/* Adição dos elementos abaixo apenas para efeito de teste - neto */}
      <Categoria categoria="Mais populares">
      </Categoria>
      <Carrossel1></Carrossel1>
      <Categoria categoria="Analgésicos"></Categoria>
      <Carrossel2></Carrossel2>


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
