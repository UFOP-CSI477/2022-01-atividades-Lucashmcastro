import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {


    return(
        <div className="container">
            <div className="row" style={{justifyContent: "space-around"}}>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Bolsas</h5>
                            <Link to="/bolsas/create" className="card-link">Novo </Link>
                            <Link to="/bolsas" className="card-link">Listar </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Empresas</h5>
                           <Link to="/empresas/create"  className="card-link">Nova </Link>
                           <Link className="card-link" to="/empresas">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Indicadores</h5>
                            <h6 className="card-subtitle mb-2 text-muted">indicadores</h6>
                            <Link className="card-link" to="/indicadores/create">Nova </Link>
                            <Link className="card-link" to="/indicadores">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Cotacoes</h5>
                            <h6 className="card-subtitle mb-2 text-muted">cotacoes</h6>
                            <Link className="card-link" to="/cotacoes/create">Novo </Link>
                            <Link className="card-link" to="/cotacoes">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Ativos</h5>
                            <Link className="card-link" to="/ativos/create">Novo </Link>
                            <Link className="card-link" to="/ativos">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Carteiras</h5>
                            <Link className="card-link" to="/carteiras/create">Novo </Link>
                            <Link className="card-link" to="/carteiras">Listar </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Acoes</h5>
                            <Link className="card-link" to="/acoes/create">Nova</Link>
                            <Link className="card-link" to="/acoes">Listar </Link>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Menu;