import React, {useState} from 'react';
import './Pesquisa.css';
import magnify from '../../assets/search-magnify.svg';
import PesquisaVoz from './PesquisaVoz'; // Importe o componente de pesquisa por voz

function Pesquisa( { remedysState, setRemedysState } ) {
    const [error, setError] = useState(null);


    const fetchData = async () => {
        const medicamentoNome = document.getElementById('medicamento').value;
        try {
            // Substitua a URL abaixo pela URL real da sua API
            const response = await fetch(`http://localhost:5000/getGeneric/${medicamentoNome}`);
            const data = await response.json();
            console.log(data)
            setRemedysState(data);
            setError(null);
        } catch (err) {
            console.error('Erro ao buscar dados da API:', err);
            setRemedysState(null);
            setError('Erro ao buscar dados da API');
            }
        };

    return (
        <div className="pesquisa">
            <div className="container-pesquisa">
                <div className="input-wrapper">
                    <input id='medicamento' className='barra-pesquisa' type='text' placeholder='Pesquisar medicamento' />
                    <span className='input-img' onClick={fetchData}><img src={magnify} alt='Botão de pesquisar em formato de Lupa' /></span>
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;
