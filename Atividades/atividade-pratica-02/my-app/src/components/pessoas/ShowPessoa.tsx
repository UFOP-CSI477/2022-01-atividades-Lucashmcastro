import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    const handleDeletePessoa = async() => {

        if (!window.confirm("Confirma exclusão da Pessoa?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/pessoas/${id}`, {
                data: {
                    data
                }
            })
            navigate('/pessoas');

        } catch(error) {
            alert('Erro ao excluir Pessoa!');
            console.error(error);
        }

    }

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
            <div>
                <button className="btn btn-danger" onClick={handleDeletePessoa}>Excluir</button>
            </div>


        </div>
    )

}

export default ShowPessoa;