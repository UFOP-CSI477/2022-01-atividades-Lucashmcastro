import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AcaoModel } from "./ListAcoes";

const ShowAcoes = () => {

    const [ acao, setAcoes ] = useState<AcaoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/acoes/${id}`)
            .then(response => {
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
        <div>
            <h2>Dados da Ação</h2>

            <p>Id: {acao?.id}</p>
            <p>Nome: {acao?.nome}</p>
            <p>Descrição: {acao?.descricao}</p>
            <p>Ativo: {acao?.ativo.tipo}</p>
            <p>Data de inserção: {acao?.created_at}</p>

            <div>
                <Link to={`/acoes/update/${acao?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteAcao}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowAcoes;