import "./Carrossel.css";

import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import CetoprofenoMedley from "../../assets/cetoprofeno-medley.svg";
import LosartanaNeoquimica from "../../assets/losartana-neoquimica.svg";
import NaratriptinaNovaquimica from "../../assets/naratriptina-novaquimica.svg";

const imagens = [
  NaratriptinaNovaquimica,
  CetoprofenoMedley,
  LosartanaNeoquimica,
  NaratriptinaNovaquimica,
  CetoprofenoMedley,
  LosartanaNeoquimica,
  NaratriptinaNovaquimica,
  CetoprofenoMedley,
  LosartanaNeoquimica,
  NaratriptinaNovaquimica,
];

function Carrossel1() {
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
          {imagens.map((img) => (
            <motion.div className="item" key={img}>
              <img
                src={img}
                alt="Imagem da embalagem do medicamento pesquisado"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrossel1;
