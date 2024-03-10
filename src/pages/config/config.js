import React from 'react';
import "./config.css";

import Cabecalho from "../../components/home/Cabecalho/Cabecalho";
import Navbar from "../../components/home/Navbar/Navbar";
import ConfigComponent from "../../components/config/config.components";

function Config() {
  return (
    <main>
      <Cabecalho />
      <ConfigComponent link="/Modo-de-exibição" titulo="Modo de Exibição"/>
      <ConfigComponent link="/Idioma" titulo="Idioma"/>
      <ConfigComponent link="/Região" titulo="Região"/>
      <ConfigComponent link="/Notificação" titulo="Notificações"/>
      <ConfigComponent link="/Limpar-Histórico" titulo="Limpar Histórico"/>
      <ConfigComponent link="/FAQ" titulo="FAQ"/>
      <ConfigComponent link="/Central-de-Ajuda" titulo="Central de Ajuda"/>
      <ConfigComponent link="/Avalie-nos" titulo="Avalie-nos"/>
      <ConfigComponent link="/Política-de-Privacidade" titulo="Política de Privacidade"/>
      <Navbar />
    </main>
  );
}

export default Config;
