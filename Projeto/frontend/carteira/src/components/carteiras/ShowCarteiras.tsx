import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CarteiraModel } from "./ListCarteiras";

const ShowCarteira = () => {

    const [ carteira, setCarteiras ] = useState<CarteiraModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/carteiras/${id}`)
            .then(response => {
                setCarteiras(response.data);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteCarteira = async() => {

        if (!window.confirm("Confirma exclusão da Carteira?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/carteiras/${id}`, {
                data: {
                    data
                }
            })
            navigate('/carteiras');

        } catch(error) {
            alert('Erro ao excluir a Carteira!');
            console.error(error);
        }
    }

    return(
        <div>
            <h2>Dados da Carteira</h2>

            <p>Id: {carteira?.id}</p>
            <p>Nome: {carteira?.nome}</p>
            <p>CPF: {carteira?.cpf}</p>
            <p>Status: {carteira?.status}</p>
            <p>Ativo: {carteira?.ativo.tipo}</p>
            <p>Data de inserção: {carteira?.created_at}</p>

            <div>
                <Link to={`/carteiras/update/${carteira?.id}`}>Atualizar</Link>
            </div>
            <div>
                <button className="btn btn-danger" onClick={handleDeleteCarteira}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowCarteira;