import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "./ListBolsas";

const ShowBolsas = () => {

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
                setOrigem(response.data.origem);
                setStatus(response.data.status);
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
        <div className="container">

            <div className="section-header sectionPadding">               
                <h2> Dados da Bolsa</h2>
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
                    <div className="fw-bold">Origem</div>
                    {origem}
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
                    <div className="fw-bold">Data de inserção</div>
                    {bolsa?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/bolsas/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteBolsa}>Excluir</button>
                </div>
            </div>
        </div>
    );


}

export default ShowBolsas;