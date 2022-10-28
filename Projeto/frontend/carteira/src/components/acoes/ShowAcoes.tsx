import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AcaoModel } from "./ListAcoes";
import { AtivoModel } from "../ativos/ListAtivos";


const ShowAcoes = () => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);
    const [ acao, setAcoes ] = useState<AcaoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/acoes/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setDescricao(response.data.descricao);
                setAtivos(response.data.ativos);
                setAcoes(response.data);
            })
    }, [id]);


    const navigate = useNavigate();

    const handleDeleteAcao = async() => {

        if (!window.confirm("Confirma exclusão da Ação?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/acoes/${id}`, {
                data: {
                    data
                }
            })
            navigate('/acoes');

        } catch(error) {
            alert('Erro ao excluir a Ação!');
            console.error(error);
        }
    }

    return(
        <div className="container">
            
            <div className="section-header sectionPadding">               
                    <h2> Dados da Ação</h2>
            </div>

            <div className="row createButtonBoth">
                <ol className="list-group list-group-numbered col-md-6">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Id</div>
                    {acao?.id}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Nome</div>
                    {acao?.nome}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Descrição</div>
                    {acao?.descricao}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Ativo</div>
                    {acao?.ativo.tipo}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {acao?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/acoes/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteAcao}>Excluir</button>
                </div>
            </div>
        </div>
    )

}

export default ShowAcoes;