import "./home.css";
import React from "react";

import HeaderComponent from "../../components/header/HeaderComponent";
import HomeComponent from "../../components/home/HomeComponent";
import InvestimentoComponents from "../../components/investimentos/investimentoComponents";

function Home() {
    return (
        <div className="content-home"> 
            <HeaderComponent />
            <HomeComponent />
            <InvestimentoComponents />
        </div>
    );
}

export default Home;
