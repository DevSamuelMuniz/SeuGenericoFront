import React from 'react';
import "./idiomaPage.css"

import Cabecalho from "../../../components/home/Cabecalho";
import Navbar from "../../../components/home/Navbar";
import IdiomaComponent from '../../../components/config-options/idioma/idioma';

function idiomaPage() {
    return (
        <main>
            <Cabecalho />
            <IdiomaComponent />
            <Navbar />
        </main>
);
}

export default idiomaPage;