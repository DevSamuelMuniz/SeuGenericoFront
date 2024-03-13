import './MedicamentoCard.css'
import { NavLink } from "react-router-dom";

const medicamentos = [
    {
      concentracao: "100 mg",
      detentor: "EMS S/A",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ÁCIDO ACETIL SALICÍLICO",
      status: "ativo",
    },
    {
      concentracao: "500mg",
      detentor: "Bayer",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ASPIRINA",
      status: "ativo",
    },
    {
      concentracao: "500mg",
      detentor: "Bayer",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ASPIRINA",
      status: "ativo",
    },
    {
      concentracao: "100mg",
      detentor: "Bayer",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ASPIRINA PREVENT",
      status: "ativo",
    },
    {
      concentracao: "300mg",
      detentor: "Bayer",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ASPIRINA PREVENT",
      status: "ativo",
    },
    {
      concentracao: "500mg",
      detentor: "Bayer",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ASPIRINA BUFFERED",
      status: "inativo",
    },
    {
      concentracao: "81mg",
      detentor: "Novartis Biociências",
      farmaco: "ácido acetilsalicílico",
      medicamento: "BUFFERIN CARDIO",
      status: "inativo",
    },
    {
      concentracao: "100mg",
      detentor: "Cimed",
      farmaco: "ácido acetilsalicílico",
      medicamento: "ÁCIDO ACETILSALICÍLICO",
      status: "inativo",
    },
    {
      concentracao: "100mg",
      detentor: "Medquímica",
      farmaco: "ácido acetilsalicílico",
      medicamento: "AS-MED",
      status: "inativo",
    },
  ];

const MedicamentosList = ({ show, remedysState, setRemedysState }) => {
    return(
        <>
            {remedysState.map(({ concentracao, detentor, medicamento, farmaco, status }) =>
            status === show ? (
            <div className="medicamento-container">
                <NavLink className='medicamento-card'>
                    <div className='medicamento-img' alt="nome do medicamento">
                    </div>
                    <div className='medicamento-info'>
                        <h1>{medicamento}</h1>
                        <div className='medicamento-info-details'>
                            <p>{`Fármaco: ${farmaco}`}</p>
                            <p>{`Concentração: ${concentracao}`}</p>
                            <p>{`Fabricante: ${detentor}`}</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            ) : null
          )}
        </>
    );
}

export default MedicamentosList