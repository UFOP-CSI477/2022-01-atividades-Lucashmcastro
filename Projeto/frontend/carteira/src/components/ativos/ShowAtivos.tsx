import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AtivoModel } from "./ListAtivos";

const ShowAtivos = () => {

    const [ ativo, setAtivo ] = useState<AtivoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/ativos/${id}`)
            .then(response => {
                setAtivo(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteAtivo = async() => {

        if (!window.confirm("Confirma exclusão do Ativo?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/ativos/${id}`, {
                data: {
                    data
                }
            })
            navigate('/ativos');

        } catch(error) {
            alert('Erro ao excluir o Ativo!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados do Ativo</h2>

            <p>Id: {ativo?.id}</p>
            <p>Tipo: {ativo?.tipo}</p>
            <p>Descrição: {ativo?.descricao}</p>
            <p>Bolsa: {ativo?.bolsa.nome}</p>
            <p>Data de inserção: {ativo?.created_at}</p>

            <div>
                <Link to={`/ativos/update/${ativo?.id}`}>Atualizar</Link>
            </div>

            <div>
                <button className="btn btn-danger" onClick={handleDeleteAtivo}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowAtivos;