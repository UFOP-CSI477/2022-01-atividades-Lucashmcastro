import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ProdutoModel } from "./ListProdutos";

const ShowProduto = () => {

    const [ produto, setProduto ] = useState<ProdutoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/produtos/${id}`)
            .then(response => {
                setProduto(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteProduto = async() => {

        if (!window.confirm("Confirma exclusão do Produto?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/produtos/${id}`, {
                data: {
                    data
                }
            })
            navigate('/produtos');

        } catch(error) {
            alert('Erro ao excluir o Produto!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados do Produto</h2>

            <p>Id: {produto?.id}</p>
            <p>Etiqueta: {produto?.etiqueta}</p>
            <p>Validade: {produto?.validade}</p>
            <p>Doacao: {produto?.doacao.id}</p>
            <p>Data de inserção: {produto?.created_at}</p>

            <div>
                <Link to={`/produtos/update/${produto?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteProduto}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowProduto;