import React from 'react';
import "./modo-de-exibicao.css"

import Cabecalho from "../../../components/home/Cabecalho";
import Navbar from "../../../components/home/Navbar";
import ModoDeExibicaoComponent from '../../../components/config-options/modo-de-exibicao/modo-de-exibicao.component';

function ModoDeExibicao() {
    return (
        <main>
            <Cabecalho />
            <ModoDeExibicaoComponent />
            <Navbar />
        </main>
);
}

export default ModoDeExibicao;