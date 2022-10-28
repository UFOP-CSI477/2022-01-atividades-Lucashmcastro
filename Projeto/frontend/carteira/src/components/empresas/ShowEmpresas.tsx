import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";
import { EmpresaModel } from "./ListEmpresas";

const ShowEmpresa = () => {

    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [sigla, setSigla] = useState('');

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [empresa, setEmpresa ] = useState<EmpresaModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/empresas/${id}`)
            .then(response => {
                setEmpresa(response.data);
                setBolsas(response.data.bolsas);
                setNome(response.data.nome);
                setSetor(response.data.setor);
                setSigla(response.data.sigla);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteEmpresa = async() => {

        if (!window.confirm("Confirma exclusão da Empresa?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete(`/empresas/${id}`, {
                data: {
                    data
                }
            })
            navigate('/empresas');

        } catch(error) {
            alert('Erro ao excluir a Empresa!');
            console.error(error);
        }

    }

    return(
        <div className="container">

            <div className="section-header sectionPadding">               
                <h2> Dados da Empresa</h2>
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
                    <div className="fw-bold">Setor</div>
                    {setor}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Sigla</div>
                    {sigla}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {empresa?.bolsa.nome}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Data de inserção</div>
                    {empresa?.created_at}
                    </div>
                </li>
                </ol> 
            </div>       

            <div className="row createButtonBoth">
                <div className="col-md-2">
                    <Link className="btn btn-primary"to={`/empresas/update/${id}`}>Atualizar</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={handleDeleteEmpresa}>Excluir</button>
                </div>
            </div>

        </div>
    )

}

export default ShowEmpresa;