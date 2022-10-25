import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

        </div>
    )

}

export default ShowDoacao;