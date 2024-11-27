import React, { useEffect, useState } from "react";
import "./Pesquisa.css";
import magnify from "../../../assets/search-magnify.svg";

function Pesquisa({ remedysState, setRemedysState, medicamentoNome, setMedicamentoNome }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10000);

  const fetchData = async (query, page) => {
    try {
      const response = await fetch(
        `http://localhost:5000/produtos?nome=${query}&page=${page}&limit=${resultsPerPage}`
      );

      const text = await response.text();
      const sanitizedText = text.replace(/NaN/g, "null");
      const data = JSON.parse(sanitizedText);

      console.log(data);
      setRemedysState(data);
    } catch (err) {
      console.error("Erro ao buscar dados da API:", err);
      setRemedysState(null);
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setMedicamentoNome(value);
    setCurrentPage(1); // Reseta a página para 1 sempre que o input mudar
  };

  useEffect(() => {
    // Chama a função de busca automaticamente sempre que medicamentoNome mudar
    if (medicamentoNome) {
      fetchData(medicamentoNome, currentPage);
    } else {
      setRemedysState([]); // Define como lista vazia se o input estiver vazio
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [medicamentoNome, currentPage, setRemedysState]);

  return (
    <div className="pesquisa">
      <div className="container-pesquisa">
        <div className="input-wrapper">
          <input
            id="medicamento"
            className="barra-pesquisa"
            type="text"
            placeholder="Pesquisa por texto"
            value={medicamentoNome}
            onChange={handleInput}
          />
          <span id="buscar" className="input-img">
            <img className="img-lupa" src={magnify} alt="pesquisar por texto" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;