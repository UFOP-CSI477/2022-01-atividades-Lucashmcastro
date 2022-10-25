import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

        </div>
    )

}

export default ShowLocalColeta;