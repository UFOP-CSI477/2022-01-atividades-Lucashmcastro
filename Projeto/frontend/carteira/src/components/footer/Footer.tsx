/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
// import '../../index.css'

const Footer = () => {

    return(
        <>

        <footer className="text-center text-lg-start bg-light text-muted" style={{marginTop: "3rem"}}>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>ValhallaSavings.</span>
            </div>
          
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
        
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Sobre Nós
                  </h6>
                  <p>
                  A Valhalla Savings veio para gerenciar a sua carteira financeira. De forma simples e clara, 
                  temos como objetivo trazer os dados reais da cotação de ações, ativos, indicadores e empresas.
                  </p>
                </div>                

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                  <p><i className="fas fa-home me-3"></i> Avenida Paulista, São Paulo, BR</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    ValhallaSavings@outlook.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> +55 (31) 986693624</p>
                </div>         
              </div>
            </div>
          </section>
        </footer>
    </>

    );
}

export default Footer;


