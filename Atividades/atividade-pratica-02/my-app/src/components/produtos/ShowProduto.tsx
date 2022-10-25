import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

        </div>
    )

}

export default ShowProduto;