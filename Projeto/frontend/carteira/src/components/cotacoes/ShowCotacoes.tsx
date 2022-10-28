import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";
import { EmpresaModel } from "../empresas/ListEmpresas";
import { CotacaoModel } from "./ListCotacoes";

const ShowCotacao = () => {

    const [valor, setValor] = useState('');
    const [date, setDate] = useState('');

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [cotacao, setCotacoes ] = useState<CotacaoModel>();

    const { id } = useParams();

    useEffect(() => {
        api.get(`/cotacoes/${id}`)
            .then(response => {
                setCotacoes(response.data);
                setBolsas(response.data.bolsas);
                setEmpresas(response.data.empresas);
                setValor(response.data.valor);
                setDate(response.data.date);
            })
    },[id]);

    const navigate = useNavigate();

    const handleDeleteCotacao = async() => {

        if (!window.confirm("Confirma exclusão da Cotação?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/cotacoes/${id}`, {
                data: {
                    data
                }
            })
            navigate('/cotacoes');

        } catch(error) {
            alert('Erro ao excluir a Cotação!');
            console.error(error);
        }
    }

    return(
        <div className="container">

                <div className="section-header sectionPadding">               
                    <h2> Dados da Cotação</h2>
                </div>

                <div className="row createButtonBoth">
                <ol className="list-group list-group-numbered col-md-6">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Id</div>
                    {id}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Valor</div>
                    {valor}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data</div>
                    {date}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Empresa</div>
                    {cotacao?.empresa.nome}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Bolsa</div>
                    {cotacao?.bolsa.nome}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {cotacao?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/cotacoes/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteCotacao}>Excluir</button>
                </div>
            </div>

        </div>
    )

}

export default ShowCotacao;