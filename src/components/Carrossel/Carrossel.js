import "./Carrossel.css";

import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import CetoprofenoMedley from "../../assets/cetoprofeno-medley.svg";
import LosartanaNeoquimica from "../../assets/losartana-neoquimica.svg";
import NaratriptinaNovaquimica from "../../assets/naratriptina-novaquimica.svg";

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

export default function Carrossel({ show, remedysState, setRemedysState }) {
  const carrossel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth);
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  }, []);

  return (
    <div className="wrapper">
      <motion.div
        ref={carrossel}
        className="carrossel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="container-carrossel"
          drag="x"
          dragElastic={0.5}
          dragConstraints={{ right: 0, left: -width }}
        >
          {remedysState.map(({ concentracao, detentor, medicamento, status }) =>
            status === show ? (
              <motion.div className="item">
                <img src={CetoprofenoMedley} alt="Texto alt" />
                <p>
                  <strong>{medicamento}</strong>
                </p>
                <p>{`Lab: ${detentor}`}</p>
                <p>{`Concentração: ${concentracao}`}</p>
              </motion.div>
            ) : null
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
