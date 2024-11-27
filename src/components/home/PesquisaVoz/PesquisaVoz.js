import React, { useState } from "react";
import "./PesquisaVoz.css";
import Microfone from "../../../assets/microfone.svg";

function PesquisaVoz({ setMedicamentoNome }) {
  const [ouvindo, setOuvindo] = useState(false);

  const iniciarGravacao = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onstart = () => {
      setOuvindo(true);
    };

    recognition.onresult = async (event) => {
      const vozCapturada = event.results[0][0].transcript;
      setMedicamentoNome(vozCapturada);
      setOuvindo(false);
    };
    recognition.onerror = (event) => {
      console.error("Erro ao reconhecer a fala:", event.error);
      setOuvindo(false);
    };

    recognition.start();
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
