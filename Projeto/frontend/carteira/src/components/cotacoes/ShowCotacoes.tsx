import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CotacaoModel } from "./ListCotacoes";

const ShowCotacao = () => {

    const [ cotacao, setCotacoes ] = useState<CotacaoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/cotacoes/${id}`)
            .then(response => {
                setCotacoes(response.data);
            })
    }, [id]);

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
        <div>
            <h2>Dados da Cotação</h2>

            <p>Id: {cotacao?.id}</p>
            <p>Data: {cotacao?.valor}</p>
            <p>Empresa: {cotacao?.empresa.nome}</p>
            <p>Bolsa: {cotacao?.bolsa.nome}</p>
            <p>Data de inserção: {cotacao?.created_at}</p>

            <div>
                <Link to={`/cotacoes/update/${cotacao?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteCotacao}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowCotacao;