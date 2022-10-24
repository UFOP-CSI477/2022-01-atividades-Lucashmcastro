import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from '../src/components/header/Header';

import CreateEstado from "./components/estados/CreateEstado";
import ListEstados from "./components/estados/ListEstados";
import ShowEstado from "./components/estados/ShowEstado";
import UpdateEstado from "./components/estados/UpdateEstado";

import CreateCidade from './components/cidades/CreateCidade';
import ListCidades from "./components/cidades/ListCidades";
import ShowCidade from "./components/cidades/ShowCidade";
import UpdateCidade from "./components/cidades/UpdateCidade";

import CreateUnidade from './components/unidades/CreateUnidade';
import ListUnidades from "./components/unidades/ListUnidades";
import ShowUnidade from "./components/unidades/ShowUnidade";
import UpdateUnidade from "./components/unidades/UpdateUnidade";
//import LoginUser from "./components/users/LoginUser";

const AppRoutes = () => {

    const userName = window.localStorage.getItem('nome') || undefined;

    return(

        <BrowserRouter>

            <Header name={userName} />

            <Routes>

                <Route path="/" element={ <App /> } />

                <Route path="/estados" element={<ListEstados />} />

                <Route path="/estados/create" element={<CreateEstado />} />

                <Route path="/estados/show/:id" element={<ShowEstado /> } />

                <Route path="/estados/update/:id" element={<UpdateEstado />} />

                <Route path="/cidades" element={<ListCidades />} />

                <Route path="/cidades/create" element={<CreateCidade />} />

                <Route path="/cidades/show/:id" element={<ShowCidade /> } />

                <Route path="/cidades/update/:id" element={<UpdateCidade />} />

                <Route path="/unidades" element={<ListUnidades />} />

                <Route path="/unidades/create" element={<CreateUnidade />} />

                <Route path="/unidades/show/:id" element={<ShowUnidade /> } />

                <Route path="/unidades/update/:id" element={<UpdateUnidade />} />


            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;