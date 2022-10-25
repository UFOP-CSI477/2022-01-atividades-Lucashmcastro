import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { LocalColetaModel } from "./ListLocaisColeta";

const ShowLocalColeta = () => {

    const [ localColeta, setLocalColeta ] = useState<LocalColetaModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/locaisColeta/${id}`)
            .then(response => {
                setLocalColeta(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteLocalColeta = async() => {

        if (!window.confirm("Confirma exclusão do Local de Coleta?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/locaisColeta/${id}`, {
                data: {
                    data
                }
            })
            navigate('/locaisColeta');

        } catch(error) {
            alert('Erro ao excluir o Local de Coleta!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados do Local de Coleta</h2>

            <p>Id: {localColeta?.id}</p>
            <p>Nome: {localColeta?.nome}</p>
            <p>Rua: {localColeta?.rua}</p>
            <p>Numero: {localColeta?.numero}</p>
            <p>Complemento: {localColeta?.complemento}</p>
            <p>Cidade: {localColeta?.cidade.nome}</p>
            <p>Data de inserção: {localColeta?.created_at}</p>

            <div>
                <Link to={`/locaisColeta/update/${localColeta?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button  className="btn btn-danger" onClick={handleDeleteLocalColeta}>Excluir</button>
            </div>


        </div>
    )

}

export default ShowLocalColeta;