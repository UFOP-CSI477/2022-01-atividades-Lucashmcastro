import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { IndicadorModel } from "./ListIndicadores";

const ShowIndicador = () => {

    const [ indicador, setIndicador ] = useState<IndicadorModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/empresas/${id}`)
            .then(response => {
                setIndicador(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteIndicador = async() => {

        if (!window.confirm("Confirma exclusão o Indicador?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/indicadores/${id}`, {
                data: {
                    data
                }
            })
            navigate('/indicadores');

        } catch(error) {
            alert('Erro ao excluir o Indicador!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados do Indicador</h2>

            <p>Id: {indicador?.id}</p>
            <p>Nome: {indicador?.nome}</p>
            <p>Tipo: {indicador?.tipo}</p>
            <p>Valor: {indicador?.valor}</p>
            <p>Data de inserção: {indicador?.created_at}</p>

            <div>
                <Link to={`/indicadores/update/${indicador?.id}`}>Atualizar</Link>
            </div>

            <div>
                <button className="btn btn-danger" onClick={handleDeleteIndicador}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowIndicador;