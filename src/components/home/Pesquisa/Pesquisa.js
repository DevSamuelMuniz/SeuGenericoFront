import React, { useEffect } from "react";
import "./Pesquisa.css";
import magnify from "../../../assets/search-magnify.svg";

function Pesquisa({ remedysState, setRemedysState }) {
  const doneTypingInterval = 1000; 
  const fetchData = async () => {
    const medicamentoNome = document.getElementById("medicamento").value;

    try {
      const response = await fetch(
        `https://backgenericoacessivel.azurewebsites.net/getGeneric/${medicamentoNome}`
      );
      const data = await response.json();
      console.log(data);
      setRemedysState(data);
    } catch (err) {
      console.error("Erro ao buscar dados da API:", err);
      setRemedysState(null);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, doneTypingInterval);

    return () => clearInterval(intervalId);
  }, []); 

  const handleInput = () => {
  };

  const handleKeyDown = (event) => {
  };

  return (
    <div className="pesquisa">
      <div className="container-pesquisa">
        <div className="input-wrapper">
          <input
            id="medicamento"
            className="barra-pesquisa"
            type="text"
            placeholder="Pesquisar por texto"
            onInput={handleInput}
            onKeyDown={handleKeyDown}
          />
          <span id="buscar" className="input-img" onClick={fetchData}>
            <img src={magnify} alt="pesquisar por voz" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
