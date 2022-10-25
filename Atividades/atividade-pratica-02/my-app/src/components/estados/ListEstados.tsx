import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api';

export interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}


const ListEstados = () => {

    // Hooks
    // State -> armazenar os dados dos estados (uf)
    const [estados, setEstados] = useState<EstadoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/estados')        
            .then(response => {
                setEstados(response.data);
            } );

    }

    return (
        <div>
            <h2>Lista dos Estados</h2>

            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {estados.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.created_at}</td>
                            <td><Link
                                to={`/estados/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default ListEstados;