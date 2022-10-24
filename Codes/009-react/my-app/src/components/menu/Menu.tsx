import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {


    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>                
                <li><Link to="/estados">Listar Estados</Link></li>
                <li><Link to="/estados/create">Criar estado</Link></li>
                <li><Link to="/cidades">Listar Cidades</Link></li>
                <li><Link to="/cidades/create">Criar cidade</Link></li>
                <li><Link to="/unidades">Listar Unidades</Link></li>
                <li><Link to="/unidades/create">Criar Unidade</Link></li>
                <li><Link to="/locaisColeta">Listar Locais Coleta</Link></li>
                <li><Link to="/locaisColeta/create">Criar Locais de Coleta</Link></li>
            </ul>
        </div>
    );

}

export default Menu;