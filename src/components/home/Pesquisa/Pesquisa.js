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
    // Define um intervalo para chamar a função fetchData a cada 5 segundos
    const intervalId = setInterval(fetchData, doneTypingInterval);

    // Limpa o intervalo quando o componente é desmontado para evitar vazamento de memória
    return () => clearInterval(intervalId);
  }, []); // Executa o efeito apenas uma vez, após a montagem inicial do componente

  const handleInput = () => {
    // Esta função ainda é necessária para tratar a entrada do usuário
    // Se desejar, você pode manter a lógica para lidar com a entrada do usuário aqui
  };

  const handleKeyDown = (event) => {
    // Esta função ainda é necessária para tratar a tecla Enter pressionada pelo usuário
    // Se desejar, você pode manter a lógica para lidar com a tecla Enter aqui
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
          <span id="buscar" className="input-img" onClick={fetchData}>
            <img src={magnify} alt="Botão de pesquisar em formato de Lupa" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
