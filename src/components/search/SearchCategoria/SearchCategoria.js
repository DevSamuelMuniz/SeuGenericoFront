import './SearchCategoria.css';
import { NavLink } from 'react-router-dom';

import filterIcon from '../../../assets/fillter-icon.svg'

const SearchCategoria = () => {
    return(
        <div className="search-categoria-container">
            <h1 className="search-categoria-nome">Medicametos encontrados</h1>
        </div>
    );
}

export default SearchCategoria;