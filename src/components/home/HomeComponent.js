import "./HomeComponent.css";
import React from "react";
import Seta from "../../assets/img/seta.png";

function HomeComponent() {
  const saldo = "1.356,34";

  return (
    <main className="home-main">
      <div className="content-saldo">
        <div className="saldo-atual">
          <h1>Saldo Atual</h1>
          <h2>R$ {saldo}</h2>
        </div>

       
      </div>

      <div className="content-button">
        <button className="button">Calculadora</button>
        <button className="button">Despesas</button>
      </div>
    </main>
  );
}

export default HomeComponent;
