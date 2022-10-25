import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "./ListCidades";

const ShowCidade = () => {

    const [ cidade, setCidade ] = useState<CidadeModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/cidades/${id}`)
            .then(response => {
                setCidade(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteCidade = async() => {

        if (!window.confirm("Confirma exclusão da cidade?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/cidades/${id}`, {
                data: {
                    data
                }
            })
            navigate('/cidades');

        } catch(error) {
            alert('Erro ao excluir o Cidade!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados da Cidade</h2>

            <p>Id: {cidade?.id}</p>
            <p>Nome: {cidade?.nome}</p>
            <p>Estado: {cidade?.estado.nome}</p>
            <p>Data de inserção: {cidade?.created_at}</p>

            <div>
                <Link to={`/cidades/update/${cidade?.id}`}>Atualizar</Link>
            </div>

            <div>
                <button className="btn btn-danger" onClick={handleDeleteCidade}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowCidade;