import "./MedicamentoCard.css";
import { NavLink } from "react-router-dom";
import Med from "../../../assets/med-gen.jpg";

const MedicamentosList = ({ remedysState, setRemedysState }) => {
  return (
    <>
      {remedysState.map(
        ({
          COMPOSICAO,
          DESCRICAO,
          DESCRICAO_TIPO_PRODUTO,
          NOME,
          NOME_FABRICANTE,
          PMC_22,
        }) => (
          <div className="medicamento-container">
            <NavLink className="medicamento-card">
              <div>
                <img
                  src={Med}
                  className="medicamento-img"
                  alt="nome do medicamento"
                />
              </div>
              <div className="medicamento-info">
                <h1>{NOME}</h1>
                <div className="medicamento-info-details">
                  <p>{`Fármaco: ${COMPOSICAO}`}</p>
                  <p>{`Concentração: ${DESCRICAO}`}</p>
                  <p>{`Tipo: ${DESCRICAO_TIPO_PRODUTO}`}</p>
                  <p>{`Fabricante: ${NOME_FABRICANTE}`}</p>
                  <p>{`Preço médio: ` + PMC_22}</p>
                </div>
              </div>
            </NavLink>
          </div>
        )
      )}
    </>
  );
};

export default MedicamentosList;
