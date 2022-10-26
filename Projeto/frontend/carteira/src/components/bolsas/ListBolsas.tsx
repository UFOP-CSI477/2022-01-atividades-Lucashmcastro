import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';

export interface BolsaModel {
    id: number;
    nome: string;
    origem: string;
    status: string;
    created_at: string;
}


const ListBolsas = () => {

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/bolsas')        
            .then(response => {
                setBolsas(response.data);
            } );

    }

    return (
        <div>
            <h2>Lista das Bolsas</h2>

            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Origem</th>
                        <th>Status</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {bolsas.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.origem}</td>
                            <td>{item.status}</td>
                            <td>{item.created_at}</td>
                            <td><Link
                                to={`/bolsas/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default ListBolsas;