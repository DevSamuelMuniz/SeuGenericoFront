import React from 'react';
import "./config.css";

import Cabecalho from "../../components/home/Cabecalho";
import Navbar from "../../components/home/Navbar";
import ConfigComponent from "../../components/config/config.components";

function Config() {
  return (
    <main>
      <Cabecalho />
      <ConfigComponent link="/config/Modo-de-exibição" titulo="Modo de Exibição"/>
      <ConfigComponent link="/config/idioma" titulo="Idioma"/>
      <ConfigComponent link="/config/região" titulo="Região"/>
      <ConfigComponent link="/config" titulo="Notificações"/>
      <ConfigComponent link="/config" titulo="Limpar Histórico"/>
      <ConfigComponent link="/config" titulo="FAQ"/>
      <ConfigComponent link="/config" titulo="Central de Ajuda"/>
      <ConfigComponent link="/config" titulo="Avalie-nos"/>
      <ConfigComponent link="/config" titulo="Política de Privacidade"/>
      <Navbar />
    </main>
  );
}

export default Config;
