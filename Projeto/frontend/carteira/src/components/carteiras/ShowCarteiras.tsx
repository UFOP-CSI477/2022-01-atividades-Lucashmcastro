import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AtivoModel } from "../ativos/ListAtivos";
import { CarteiraModel } from "./ListCarteiras";

const ShowCarteira = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [status, setStatus] = useState('');

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);
    const [ carteira, setCarteiras ] = useState<CarteiraModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/carteiras/${id}`)
            .then(response => {
                setCarteiras(response.data);
                setAtivos(response.data);
                setNome(response.data.nome);
                setCpf(response.data.cpf);
                setStatus(response.data.status);
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
        <div className="container">

                <div className="section-header sectionPadding">               
                    <h2> Dados da Carteira</h2>
                </div>

                <div className="row createButtonBoth">
                <ol className="list-group list-group-numbered col-md-6">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Id</div>
                    {id}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Nome</div>
                    {nome}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">CPF</div>
                    {cpf}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Status</div>
                    {status}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Ativo</div>
                    {carteira?.ativo.tipo}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {carteira?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/carteiras/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteCarteira}>Excluir</button>
                </div>
            </div>

        </div>
    )

}

export default ShowCarteira;