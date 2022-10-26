import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EmpresaModel } from "./ListEmpresas";

const ShowEmpresa = () => {

    const [ empresa, setEmpresa ] = useState<EmpresaModel>()

    const { id } = useParams();

    useEffect(() => {
        api.get(`/empresas/${id}`)
            .then(response => {
                setEmpresa(response.data);
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
        <div>
            <h2>Dados da Empresa</h2>

            <p>Id: {empresa?.id}</p>
            <p>Nome: {empresa?.nome}</p>
            <p>Setor: {empresa?.setor}</p>
            <p>Sigla: {empresa?.sigla}</p>
            <p>Data de inserção: {empresa?.created_at}</p>

            <div>
                <Link to={`/empresas/update/${empresa?.id}`}>Atualizar</Link>
            </div>

            <div>
                <button className="btn btn-danger" onClick={handleDeleteEmpresa}>Excluir</button>
            </div>

        </div>
    )

}

export default ShowEmpresa;