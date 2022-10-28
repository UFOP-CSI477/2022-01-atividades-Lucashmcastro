/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './menu.css';
import '../../index.css'

const Menu = () => {

    return(
        <><div className="container">

            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/menu" className="active">Home</Link></li>
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

            <section id="constructions" className="constructions">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Entenda o que é Bolsa de Valores</h2>
                        <p>A bolsa de valores é um ambiente de negociações de valores mobiliários como ações, títulos públicos e commodities. Essa é a definição simples, mas para muitas pessoas, a Bolsa de Valores é muito mais do que um ambiente para comprar e vender frações de empresas.</p>
                    </div>

                    <div className="row gy-4">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-item">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="card-bg img2"></div>
                                    </div>
                                    <div className="col-xl-7 d-flex align-items-center">
                                        <div className="card-body">
                                            <h4 className="card-title">Entenda o que é Empresa</h4>
                                            <p>A sigla IPO significa “Initial Public Offering” ou “Oferta Pública Inicial”, traduzido para o português. Ela descreve um evento realizado na Bolsa de Valores em que a empresa, pela primeira vez, oferece a oportunidade a investidores de se tornarem sócios por meio da compra de ações..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="card-item">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="card-bg img3"></div>
                                    </div>
                                    <div className="col-xl-7 d-flex align-items-center">
                                        <div className="card-body">
                                            <h4 className="card-title">Entenda o que é Indicador</h4>
                                            <p>Os indicadores financeiros são importantes para monitorar a performance de uma empresa no mercado. Para ficar mais claro, ao consultar um indicador financeiro o investidor pode descobrir, por exemplo, qual é o lucro e o grau de endividamento de uma companhia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card-item">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="card-bg img4"></div>
                                    </div>
                                    <div className="col-xl-7 d-flex align-items-center">
                                        <div className="card-body">
                                            <h4 className="card-title">Entenda o que é Ação</h4>
                                            <p>Ações representam uma fração do capital social de uma empresa. Ao comprar uma ação o investidor se torna sócio da empresa, ou seja, de um negócio. Passa a correr os riscos deste negócio bem como participa dos lucros e prejuízos como qualquer empresário.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card-item">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="card-bg img5"></div>
                                    </div>
                                    <div className="col-xl-7 d-flex align-items-center">
                                        <div className="card-body">
                                            <h4 className="card-title">Entenda o que é Cotação</h4>
                                            <p>A cotação da bolsa de valores é o preço vigente das ações definido pela oferta e procura no mercado. Ao longo do dia, esse valor sobe e desce inúmeras vezes, de acordo com as expectativas e transações realizadas pelos investidores — daí a volatilidade típica da renda variável.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card-item">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="card-bg imagem6"></div>
                                    </div>
                                    <div className="col-xl-7 d-flex align-items-center">
                                        <div className="card-body">
                                            <h4 className="card-title">Entenda o que é Ativo</h4>
                                            <p>No mercado financeiro, os ativos são os investimentos. É o caso de um título de dívida ou das ações, como você verá ao longo deste conteúdo. Outra característica relevante dos ativos é que eles geram renda. Adquiri-los ou aportar recursos neles permite explorar seu valor e, potencialmente, obter uma rentabilidade.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="card-item">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="card-bg imagem6"></div>
                                    </div>
                                    <div className="col-xl-7 d-flex align-items-center">
                                        <div className="card-body">
                                            <h4 className="card-title"></h4>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

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


