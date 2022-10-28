/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './menu.css';
import '../../index.css'

const Menu = () => {

    return(
        <><div className="App">

            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/bolsas" className="card-link">Bolsas</Link></li>
                            <li><Link to="/empresas">Empresas</Link></li>
                            <li><Link to="/indicadores">Indicadores</Link></li>
                            <li><Link to="/acoes">Ações</Link></li>
                            <li><Link to="/cotacoes">Cotações</Link></li>
                            <li><Link to="/ativos">Ativos</Link></li>
                            <li><Link to="/carteiras">Minha Carteira</Link></li>
                        </ul>
                    </nav>

                    <a href="#" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <h1>ValhallaSavings<span>.</span></h1>
                    </a>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>


            <section id="hero" className="hero">

                <div className="info d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center" style={{ margin: "10rem" }}>
                                <h2 data-aos="fade-down">Seja Bem Vindo(a)</h2>
                                <p data-aos="fade-up">Aqui você pode gerenciar sua Carteira de Investimento.</p>
                                <a data-aos="fade-up" data-aos-delay="200" className="btn-get-started"><Link to="/carteiras">Gerenciar</Link></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                    <div className="carousel-item active img1"></div>


                    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>

            </section>


            {/*
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
    
                </div> */}
        </div>
        <footer>
                
        </footer>
        </>
    );
}

export default Menu;


