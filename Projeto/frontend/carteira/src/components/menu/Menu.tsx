/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Link, Routes, useLocation }  from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './menu.css';
import '../../index.css'

const Menu = () => {

    // const location = useLocation();
    // const [ title, setTitle] = useState('');
    
    // useEffect(() =>{ 
    //     setTitle(location.pathname) 
    // }, [])

    // function setType(type: string) {
    //     switch (type) {
    //         case  "/bolsas":     setTitle(   "Bolsas"         )   ; break;
    //         case  "/acoes":      setTitle(   "Ações"          )   ; break;
    //         case  "/ativos":     setTitle(   "Ativos"         )   ; break;
    //         case  "/carteiras":  setTitle(   "Carteira"       )   ; break;
    //         case  "/cotacoes":   setTitle(   "Cotações"       )   ; break;
    //         case  "/empresas":   setTitle(   "Empresas"       )   ; break;
    //         case  "/indicadores":setTitle(   "Indicadores"    )   ; break;
    //     }
    //     return title;   
    // }

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
                                {/* <h2 data-aos="fade-down">{setType(location.pathname)}</h2> */}
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
        </div>
        <footer>
                
        </footer>
        </>
    );
}

export default Menu;


