import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AtivoModel } from "./ListAtivos";
import {BolsaModel} from "../bolsas/ListBolsas";

const ShowAtivos = () => {

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [ ativo, setAtivos ] = useState<AtivoModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/ativos/${id}`)
            .then(response => {
                setAtivos(response.data);
                setBolsas(response.data.bolsas);
                setTipo(response.data.tipo);
                setDescricao(response.data.descricao);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteAtivo = async() => {

        if (!window.confirm("Confirma exclusão do Ativo?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/ativos/${id}`, {
                data: {
                    data
                }
            })
            navigate('/ativos');

        } catch(error) {
            alert('Erro ao excluir o Ativo!');
            console.error(error);
        }

    }

    return(
        <div className="container">
            
            <div className="section-header sectionPadding">               
                    <h2> Dados do Ativo{tipo}  </h2>
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
                    <div className="fw-bold">Tipo</div>
                    {tipo}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Descrição</div>
                    {descricao}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Bolsa</div>
                    {ativo?.bolsa.nome}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {ativo?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/ativos/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteAtivo}>Excluir</button>
                </div>
            </div>

        </div>
    )

}

export default ShowAtivos;