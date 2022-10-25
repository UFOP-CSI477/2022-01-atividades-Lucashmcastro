import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import {TipoSanguineoModel } from "./ListTiposSanguineos";

const ShowTipoSanguineo = () => {

    const { id } = useParams();

    const [ tipoSanguineo, setTipoSanguineo ] = useState<TipoSanguineoModel>();

    const [ tipo, setTipo ] = useState('');
    const [ fator, setFator] = useState('');

    useEffect(() => {

        api.get(`/tiposSanguineos/${id}`)
            .then(response => {
                // console.log(response.data);
                setTipoSanguineo(response.data);
                setTipo(response.data.nome);
                setFator(response.data.sigla);
            })

    },[id]);

    const navigate = useNavigate();

    const handleDeleteTipoSanguineo = async() => {

        if (!window.confirm("Confirma exclusão do Tipo Sanguineo?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/tiposSanguineos/${id}`, {
                data: {
                    data
                }
            })
            navigate('/tiposSanguineos');
        } catch(error) {
            alert('Erro ao excluir o Tipo Sanguineo!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados do Tipo Sanguineo: {id}-{tipo} / {tipoSanguineo?.fator}</h2>

            <p>Tipo: {tipo}</p>
            <p>Fator: {fator}</p>
            <p>Data de inserção: {tipoSanguineo?.created_at}</p>


            <div>
                <Link to={`/tiposSanguineos/update/${id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteTipoSanguineo}>Excluir</button>
            </div>



        </div>
    );


}

export default ShowTipoSanguineo;