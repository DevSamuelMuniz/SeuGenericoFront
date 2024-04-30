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
    recognition.interimResults = true;
    recognition.continuous = false;

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
      await realizarPesquisa(vozCapturada); // Wait for the search to complete
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

  const realizarPesquisa = async (textoPesquisa) => {
    try {
      // Replace this with your actual API endpoint
      const response = await fetch(`https://example.com/api/search?query=${textoPesquisa}`);
      const data = await response.json();
      console.log(data);
      // Process the data or update state as needed
    } catch (err) {
      console.error("Erro ao buscar dados da API:", err);
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
          <img src={Microfone} alt="Ícone em formato de Microfone" />
        </button>
      </div>
    </div>
  );
}

export default PesquisaVoz;
