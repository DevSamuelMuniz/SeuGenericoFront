import React, { useState } from "react";
import "./Pesquisa.css";
import magnify from "../../assets/search-magnify.svg";

function Pesquisa({ remedysState, setRemedysState }) {
  let typingTimer;
  const doneTypingInterval = 100;

  const fetchData = async () => {
    const medicamentoNome = document.getElementById("medicamento").value;

    try {
      const response = await fetch(
        `http://localhost:5000/getGeneric/${medicamentoNome}`
      );
      const data = await response.json();
      console.log(data);
      setRemedysState(data);
    } catch (err) {
      console.error("Erro ao buscar dados da API:", err);
      setRemedysState(null);
    }
  };

  const handleInput = () => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(function () {
      fetchData();
    }, doneTypingInterval);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      clearTimeout(typingTimer);
      fetchData();
    }
  };

  return (
    <div className="pesquisa">
      <div className="container-pesquisa">
        <div className="input-wrapper">
          <input
            id="medicamento"
            className="barra-pesquisa"
            type="text"
            placeholder="Pesquisar medicamento"
            onInput={handleInput}
            onKeyDown={handleKeyDown}
          />
          <span className="input-img" onClick={fetchData}>
            <img src={magnify} alt="Botão de pesquisar em formato de Lupa" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
