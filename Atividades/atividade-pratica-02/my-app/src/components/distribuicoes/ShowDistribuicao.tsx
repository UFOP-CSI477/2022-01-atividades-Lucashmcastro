import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { DistribuicaoModel } from "./ListDistribuicoes";

const ShowDistribuicao = () => {

    const [ distribuicao, setDistribuicao ] = useState<DistribuicaoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/distribuicoes/${id}`)
            .then(response => {
                setDistribuicao(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteDistribuicao = async() => {

        if (!window.confirm("Confirma exclusão da Distribuição?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/distribuicoes/${id}`, {
                data: {
                    data
                }
            })
            navigate('/distribuicoes');

        } catch(error) {
            alert('Erro ao excluir a Distribuição!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados da Distribuição</h2>

            <p>Id: {distribuicao?.id}</p>
            <p>Data: {distribuicao?.date}</p>
            <p>Produto: {distribuicao?.produto.etiqueta}</p>
            <p>Unidade: {distribuicao?.unidade.nome}</p>
            <p>Data de inserção: {distribuicao?.created_at}</p>

            <div>
                <Link to={`/distribuicoes/update/${distribuicao?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteDistribuicao}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowDistribuicao;