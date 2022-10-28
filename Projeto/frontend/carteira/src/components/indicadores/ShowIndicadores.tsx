import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";
import { IndicadorModel } from "./ListIndicadores";

const ShowIndicador = () => {

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [indicador, setIndicador ] = useState<IndicadorModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/indicadores/${id}`)
            .then(response => {
                setIndicador(response.data);
                setNome(response.data.nome);
                setTipo(response.data.tipo);
                setValor(response.data.valor);
                setBolsas(response.data.bolsa);
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
        <div className="container">

            <div className="section-header sectionPadding">               
                <h2> Dados do Indicador</h2>
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
                    <div className="fw-bold">Tipo</div>
                    {tipo}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Valor</div>
                    {valor}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {indicador?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/indicadores/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteIndicador}>Excluir</button>
                </div>
            </div>

        </div>
    )

}

export default ShowIndicador;