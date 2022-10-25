import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

        </div>
    )

}

export default ShowDistribuicao;