import "./MedicamentoCard.css";
import { NavLink } from "react-router-dom";
import Med from "../../../assets/med-gen.jpg";
import Bula from "../../../assets/bula.png";

const preco = "R$ 60,00";
const MedicamentosList = ({ show, remedysState, setRemedysState }) => {
  return (
    <>
      {remedysState.map(
        ({ concentracao, detentor, medicamento, farmaco, status, bula_link }) =>
          status === show ? (
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
                  <h1>{medicamento}</h1>
                  <div className="medicamento-info-details">
                    <p>{`Fármaco: ${farmaco}`}</p>
                    <p>{`Concentração: ${concentracao}`}</p>
                    <p>{`Fabricante: ${detentor}`}</p>
                    <p>{`Preço médio: ` + preco}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          ) : null
      )}
    </>
  );
};

export default MedicamentosList;
