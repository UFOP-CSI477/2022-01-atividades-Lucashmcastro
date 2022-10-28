import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Header from '../src/components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import HomePage from './components/homePage/homePage';

import CreateAcao from "./components/acoes/CreateAcao";
import ListAcoes from "./components/acoes/ListAcoes";
import ShowAcoes from "./components/acoes/ShowAcoes";
import UpdateAcao from "./components/acoes/UpdateAcao";

import CreateAtivo from './components/ativos/CreateAtivo';
import ListAtivos from "./components/ativos/ListAtivos";
import ShowAtivos from "./components/ativos/ShowAtivos";
import UpdateAtivo from "./components/ativos/UpdateAtivo";

import CreateBolsa from './components/bolsas/CreateBolsa';
import ListBolsas from "./components/bolsas/ListBolsas";
import ShowBolsas from "./components/bolsas/ShowBolsas";
import UpdateBolsa from "./components/bolsas/UpdateBolsa";

import CreateCarteira from './components/carteiras/CreateCarteira';
import ListCarteiras from "./components/carteiras/ListCarteiras";
import ShowCarteiras from "./components/carteiras/ShowCarteiras";
import UpdateCarteira from "./components/carteiras/UpdateCarteira";

import CreateCotacao from './components/cotacoes/CreateCotacao';
import ListCotacoes from "./components/cotacoes/ListCotacoes";
import ShowCotacoes from "./components/cotacoes/ShowCotacoes";
import UpdateCotacao from "./components/cotacoes/UpdateCotacao";

import CreateEmpresa from './components/empresas/CreateEmpresa';
import ListEmpresas from "./components/empresas/ListEmpresas";
import ShowEmpresas from "./components/empresas/ShowEmpresas";
import UpdateEmpresa from "./components/empresas/UpdateEmpresa";

import CreateIndicador from './components/indicadores/CreateIndicador';
import ListIndicadores from "./components/indicadores/ListIndicadores";
import ShowIndicadores from "./components/indicadores/ShowIndicadores";
import UpdateIndicador from "./components/indicadores/UpdateIndicador";

const AppRoutes = () => {

    // const userName = window.localStorage.getItem('nome') || undefined;

    return(

        <><BrowserRouter>

            {/* <Header name={userName} /> */}
            <Menu />          
                <Routes>

                    <Route path="/" element={<HomePage />} />

                    <Route path="/acoes" element={<ListAcoes />} />
                    <Route path="/acoes/create" element={<CreateAcao />} />
                    <Route path="/acoes/show/:id" element={<ShowAcoes />} />
                    <Route path="/acoes/update/:id" element={<UpdateAcao />} />

                    <Route path="/ativos" element={<ListAtivos />} />
                    <Route path="/ativos/create" element={<CreateAtivo />} />
                    <Route path="/ativos/show/:id" element={<ShowAtivos />} />
                    <Route path="/ativos/update/:id" element={<UpdateAtivo />} />

                    <Route path="/bolsas" element={<ListBolsas />} />
                    <Route path="/bolsas/create" element={<CreateBolsa />} />
                    <Route path="/bolsas/show/:id" element={<ShowBolsas />} />
                    <Route path="/bolsas/update/:id" element={<UpdateBolsa />} />

                    <Route path="/carteiras" element={<ListCarteiras />} />
                    <Route path="/carteiras/create" element={<CreateCarteira />} />
                    <Route path="/carteiras/show/:id" element={<ShowCarteiras />} />
                    <Route path="/carteiras/update/:id" element={<UpdateCarteira />} />

                    <Route path="/cotacoes" element={<ListCotacoes />} />
                    <Route path="/cotacoes/create" element={<CreateCotacao />} />
                    <Route path="/cotacoes/show/:id" element={<ShowCotacoes />} />
                    <Route path="/cotacoes/update/:id" element={<UpdateCotacao />} />

                    <Route path="/empresas" element={<ListEmpresas />} />
                    <Route path="/empresas/create" element={<CreateEmpresa />} />
                    <Route path="/empresas/show/:id" element={<ShowEmpresas />} />
                    <Route path="/empresas/update/:id" element={<UpdateEmpresa />} />

                    <Route path="/indicadores" element={<ListIndicadores />} />
                    <Route path="/indicadores/create" element={<CreateIndicador />} />
                    <Route path="/indicadores/show/:id" element={<ShowIndicadores />} />
                    <Route path="/indicadores/update/:id" element={<UpdateIndicador />} />

                </Routes>
                <Footer />
        </BrowserRouter>
        </>

    );

}

export default AppRoutes;