import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { BolsaModel } from '../bolsas/ListBolsas';

export interface AtivoModel {
    id: number;
    tipo: string;
    descricao: string;
    created_at: string;
    bolsa_id: number;
    bolsa: BolsaModel;
}

const ListAtivos = () => {

    const [ ativos, setAtivos ] = useState<AtivoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/ativos')        
            .then(response => {
                setAtivos(response.data);
            } );

    }

    const handleDeleteAtivo = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão do Ativo?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/ativos', {
                data: {
                    data
                }
            });
            window.alert("Ativo excluído com sucesso!");
            
            //loadData();

            setAtivos(ativos.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir o Ativo!");
            console.error(error);
        }
    }

    return(
        <div>
            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Bolsa</th>
                        <th>Criação</th>
                        <th>Ação</th>                     
                    </tr>
                </thead>

                <tbody>

                    { ativos.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/ativos/show/${item.id}`}>{item.tipo}</Link></td>
                                <td>{item.descricao}</td>
                                <td>{item.bolsa.nome}-{item.bolsa.origem}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/ativos/show/${item.id}`}>Visualizar</Link> </td>                               
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListAtivos;