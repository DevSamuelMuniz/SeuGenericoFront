import React, { useState } from "react";
import "./PesquisaVoz.css";
import Microfone from "../../../assets/microfone.svg";

function PesquisaVoz() {
  const [dadosGravados, setDadosGravados] = useState(null); // Fixed state name
  const [ouvindo, setOuvindo] = useState(false);
  const [gravacaoAtiva, setGravacaoAtiva] = useState(false); // Fixed state name

  const iniciarGravacao = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onstart = () => {
      setOuvindo(true);
    };

    recognition.onresult = async (event) => {
      const vozCapturada = event.results[0][0].transcript;
      const dadosJSON = {
        textoCapturado: vozCapturada,
        // Other fields you may want to add
      };
      setDadosGravados(dadosJSON);
      setOuvindo(false);
      preencherInput(vozCapturada);
      setGravacaoAtiva(true);
    };

    recognition.start();
  };

  const preencherInput = (texto) => {
    const inputPesquisa = document.getElementById("medicamento");
    if (inputPesquisa) {
      inputPesquisa.value = texto;
    }
  };



  return (
    <div className="pesquisa-voz">
      <div className="pesquisa-voz-container">
        <span className="mic-active"></span>
        <button
          className={ouvindo ? "pesquisa-voz-btn-active" : "pesquisa-voz-btn"}
          onClick={iniciarGravacao}
        >
          <img src={Microfone} alt="Pesquisar por voz" />
        </button>
      </div>
    </div>
  );
}

export default PesquisaVoz;
