import './CategoriaNome.css';

let Categoria = 'Mais Populares';

function CategoriaNome1() {
    return (
        <div className='categoria'>
            <div className='container-nome'>
                <h1 className='categoria-nome'>{Categoria}</h1>
            </div>
        </div>
    )
}

export default CategoriaNome1;