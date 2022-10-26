import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "./ListBolsas";

const ShowBolsa = () => {

    const { id } = useParams();

    const [ bolsa, setBolsa ] = useState<BolsaModel>();

    const [nome, setNome] = useState('');
    const [origem, setOrigem] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {

        api.get(`/bolsas/${id}`)
            .then(response => {
                setBolsa(response.data);
                setNome(response.data.nome);
                setOrigem(response.data.sigla);
                setStatus(response.data.sigla);
            })

    },[id]);

    const navigate = useNavigate();

    const handleDeleteBolsa = async() => {

        if (!window.confirm("Confirma exclusão da Bolsa?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/bolsas/${id}`, {
                data: {
                    data
                }
            })
            navigate('/bolsas');
        } catch(error) {
            alert('Erro ao excluir a Bolsa!');
            console.error(error);
        }

    }

    return(
        <div>
            <h2>Dados da Bolsa: {id}-{nome} / {bolsa?.nome}</h2>

            <p>Nome: {nome}</p>
            <p>Origem: {origem}</p>
            <p>Status: {status}</p>
            <p>Data de inserção: {bolsa?.created_at}</p>

            <div>
                <Link to={`/bolsas/update/${id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteBolsa}>Excluir</button>
            </div>

        </div>
    );


}

export default ShowBolsa;