import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { PessoaModel } from "./ListPessoas";

const ShowPessoa = () => {

    const [ pessoa, setPessoa ] = useState<PessoaModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/pessoas/${id}`)
            .then(response => {
                setPessoa(response.data);
            })
    }, [id]);

    return(
        <div>
            <h2>Dados da Pessoa</h2>

            <p>Id: {pessoa?.id}</p>
            <p>Nome: {pessoa?.nome}</p>
            <p>Rua: {pessoa?.rua}</p>
            <p>Numero: {pessoa?.numero}</p>
            <p>Complemento: {pessoa?.complemento}</p>
            <p>Documento: {pessoa?.documento}</p>
            <p>Cidade: {pessoa?.cidade.nome}</p>
            <p>Tipo Sanguineo: {pessoa?.tipoSanguineo.fator}</p>
            <p>Data de inserção: {pessoa?.created_at}</p>

            <div>
                <Link to={`/pessoas/update/${pessoa?.id}`}>Atualizar</Link>
            </div>

        </div>
    )

}

export default ShowPessoa;