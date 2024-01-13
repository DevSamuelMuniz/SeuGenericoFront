import './CategoriaNome.css';

let Categoria = 'Antialérgicos';

function CategoriaNome3() {
    return (
        <div className='categoria'>
            <div className='container-nome'>
                <h1 className='categoria-nome'>{Categoria}</h1>
            </div>
        </div>
    )
}

export default CategoriaNome3;