import React, { useState } from "react";
import "./PesquisaVoz.css";
import Microfone from "../../assets/microfone.svg";

function PesquisaVoz() {
  const [dadosGravados, setDadosGravados] = useState(null);
  const [ouvindo, setOuvindo] = useState(false);
  const [gravacaoAtiva, setGravacaoAtiva] = useState(false);

  const iniciarGravacao = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onstart = () => {
      setOuvindo(true);
    };

    recognition.onresult = (event) => {
      const vozCapturada = event.results[0][0].transcript;
      const dadosJSON = {
        textoCapturado: vozCapturada,
        // Outros campos que você deseje adicionar
      };
      setDadosGravados(dadosJSON); // Salva os dados capturados como um objeto JSON no estado
      setOuvindo(false);
      preencherInput(vozCapturada); // Chama a função para preencher o campo de input com o texto capturado
      realizarPesquisa(vozCapturada); // Chama a função para realizar a pesquisa com o texto capturado
      setGravacaoAtiva(true);
    };

    recognition.start();
  };

  const preencherInput = (texto) => {
    const inputPesquisa = document.getElementById("medicamento");
    if (inputPesquisa) {
      inputPesquisa.value = texto; // Preenche o campo de input com o texto capturado
    }
  };

  const realizarPesquisa = (textoPesquisa) => {
    // Adicione aqui a lógica para realizar a pesquisa com o texto capturado
    // Por exemplo: realizar a busca ao disparar um evento de mudança (change) no input ou chamando a função que realiza a busca
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
