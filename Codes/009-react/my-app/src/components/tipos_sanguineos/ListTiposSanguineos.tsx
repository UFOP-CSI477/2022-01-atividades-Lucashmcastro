import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api';

export interface TipoSanguineoModel {
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
}


const ListTiposSanguineos = () => {

    // Hooks
    // State -> armazenar os dados dos tiposSanguineos 
    const [tiposSanguineos, setTiposSanguineos] = useState<TipoSanguineoModel[]>([]);

    const navigate = useNavigate();

    // Effect -> carregar os dados
    useEffect(() => {
        // Component -> effect -> state -> render()
        const token = window.localStorage.getItem('token') || undefined

        if (token === undefined) {
            navigate('/login');
        }

        const header = window.localStorage.getItem('header');

        const config = {
            headers: {
                "Authorization": `Bearer ${header} ${token}`
            }
        }

        api.get('/tiposSanguineos', config)
            .then(reponse => {
                // atualizar o state
                console.log(reponse.data);
                setTiposSanguineos(reponse.data);
            })

    }, [navigate])


    return (
        <div>
            <h2>Lista dos Tipos Sanguineos</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Fator</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {tiposSanguineos.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.tipo}</td>
                            <td>{item.fator}</td>
                            <td>{item.created_at}</td>
                            <td><Link
                                to={`/tiposSanguineos/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    ))}



                </tbody>


            </table>

        </div>
    );

}

export default ListTiposSanguineos;