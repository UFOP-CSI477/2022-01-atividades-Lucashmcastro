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
                            <a href="#" className="card-link"><Link to="/estados/create">Novo </Link></a>
                            <a href="#" className="card-link"><Link to="/estados">Listar </Link></a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Cidades</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Cidades Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as cidades pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/cidades/create">Nova </Link></a>
                            <a href="#" className="card-link"><Link to="/cidades">Listar </Link></a>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Unidades</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Unidades Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as unidades pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/unidades/create">Nova </Link></a>
                            <a href="#" className="card-link"><Link to="/unidades">Listar </Link></a>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Local Coleta</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Local Coleta Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os locais de coleta pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/locaisColeta/create">Novo </Link></a>
                            <a href="#" className="card-link"><Link to="/locaisColeta">Listar </Link></a>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Tipos Sanguineos</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Tipos Sanguineos Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os tipos sanguineos pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/tiposSanguineos/create">Novo </Link></a>
                            <a href="#" className="card-link"><Link to="/tiposSanguineos">Listar </Link></a>
                        </div>
                    </div>


                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Produtos</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Produtos Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar os produtos pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/produtos/create">Novo </Link></a>
                            <a href="#" className="card-link"><Link to="/produtos">Listar </Link></a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Doações</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Doações de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as doações pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/doacoes/create">Nova</Link></a>
                            <a href="#" className="card-link"><Link to="/doacoes">Listar </Link></a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Distribuições</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Distribuições de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as distribuições pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/distribuicoes/create">Nova </Link></a>
                            <a href="#" className="card-link"><Link to="/distribuicoes">Listar </Link></a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Pessoas</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Pessoas Doação de Sangue</h6>
                            <p className="card-text">Aqui você pode criar e listar as pessoas pertencentes a doação de sangue.</p>
                            <a href="#" className="card-link"><Link to="/pessoas/create">Nova </Link></a>
                            <a href="#" className="card-link"><Link to="/pessoas">Listar </Link></a>
                        </div>
                    </div>
            </div>
        </div>
    );

}

export default Menu;