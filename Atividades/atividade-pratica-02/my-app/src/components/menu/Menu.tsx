import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {


    return(
        <div className="container">
            <div className="row" style={{justifyContent: "space-around"}}>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Estados</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Estados Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os estados pertencentes a doação de sangue.</p>
                            <Link to="/estados/create" className="card-link">Novo </Link>
                            <Link to="/estados" className="card-link">Listar </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Cidades</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Cidades Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as cidades pertencentes a doação de sangue.</p>
                           <Link to="/cidades/create"  className="card-link">Nova </Link>
                           <Link className="card-link" to="/cidades">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Unidades</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Unidades Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as unidades pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/unidades/create">Nova </Link>
                            <Link className="card-link" to="/unidades">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Local Coleta</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Local Coleta Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os locais de coleta pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/locaisColeta/create">Novo </Link>
                            <Link className="card-link" to="/locaisColeta">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Tipos Sanguineos</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Tipos Sanguineos Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os tipos sanguineos pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/tiposSanguineos/create">Novo </Link>
                            <Link className="card-link" to="/tiposSanguineos">Listar </Link>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Produtos</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Produtos Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os produtos pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/produtos/create">Novo </Link>
                            <Link className="card-link" to="/produtos">Listar </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Doações</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Doações de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as doações pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/doacoes/create">Nova</Link>
                            <Link className="card-link" to="/doacoes">Listar </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Distribuições</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Distribuições de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as distribuições pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/distribuicoes/create">Nova </Link>
                            <Link className="card-link" to="/distribuicoes">Listar </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Pessoas</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Pessoas Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as pessoas pertencentes a doação de sangue.</p>
                            <Link className="card-link" to="/pessoas/create">Nova </Link>
                            <Link className="card-link" to="/pessoas">Listar </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Menu;