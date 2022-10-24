import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { UnidadeModel } from "./ListUnidades";

const ShowUnidade = () => {

    const [ unidade, setUnidade ] = useState<UnidadeModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/unidades/${id}`)
            .then(response => {
                setUnidade(response.data);
            })
    }, [id]);

    return(
        <div>
            <h2>Dados da Unidade</h2>

            <p>Id: {unidade?.id}</p>
            <p>Nome: {unidade?.nome}</p>
            <p>Número: {unidade?.numero}</p>
            <p>Complemento: {unidade?.complemento}</p>
            <p>Cidade: {unidade?.cidade.nome}</p>
            <p>Data de inserção: {unidade?.created_at}</p>

            <div>
                <Link to={`/unidades/update/${unidade?.id}`}>Atualizar</Link>
            </div>

        </div>
    )

}

export default ShowUnidade;