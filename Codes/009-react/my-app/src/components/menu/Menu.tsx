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

                <li><Link to="/tiposSanguineos">Listar Tipos Sanguineos</Link></li>
                <li><Link to="/tiposSanguineos/create">Criar Tipos Sanguineos</Link></li>
                
                <li><Link to="/produtos">Listar Produtos</Link></li>
                <li><Link to="/produtos/create">Criar Produtos</Link></li>
                
                <li><Link to="/doacoes">Listar Doações</Link></li>
                <li><Link to="/doacoes/create">Criar Doações</Link></li>

                <li><Link to="/distribuicoes">Listar Distribuições</Link></li>
                <li><Link to="/distribuicoes/create">Criar Distribuições</Link></li>

            </ul>
        </div>
    );

}

export default Menu;