import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { DoacaoModel } from "./ListDoacoes";

const ShowDoacao = () => {

    const [ doacao, setDoacao ] = useState<DoacaoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/doacoes/${id}`)
            .then(response => {
                setDoacao(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteDoacao = async() => {

        if (!window.confirm("Confirma exclusão da Doação?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/doacoes/${id}`, {
                data: {
                    data
                }
            })
            navigate('/doacoes');

        } catch(error) {
            alert('Erro ao excluir a Doação!');
            console.error(error);
        }
    }

    return(
        <div>
            <h2>Dados da Doação</h2>

            <p>Id: {doacao?.id}</p>
            <p>Data: {doacao?.date}</p>
            <p>Pessoa: {doacao?.pessoa.nome}</p>
            <p>Local Coleta: {doacao?.local.nome}</p>
            <p>Data de inserção: {doacao?.created_at}</p>

            <div>
                <Link to={`/doacoes/update/${doacao?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteDoacao}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowDoacao;