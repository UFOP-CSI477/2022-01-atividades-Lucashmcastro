import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { AtivoModel } from '../ativos/ListAtivos';

export interface CarteiraModel {
    id: number;
    nome: string;
    cpf: string;
    status: string;
    created_at: string;
    ativo_id: number;
    ativo: AtivoModel;
}

const ListCarteiras = () => {

    const [ carteiras, setCarteiras ] = useState<CarteiraModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/carteiras')        
            .then(response => {
                setCarteiras(response.data);
            } );

    }

    const handleDeleteCarteira = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Carteira?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/carteiras', {
                data: {
                    data
                }
            });
            window.alert("Carteira excluída com sucesso!");
            
            //loadData();

            setCarteiras(carteiras.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Carteira!");
            console.error(error);
        }
    }

   
    return(
        <div className="container">
            <div className="createButton">
                <button type="button" className="btn btn-outline-warning"><Link to="/carteiras/create">Cadastrar</Link></button>          
            </div>
            
            <div className="section-header sectionPadding">               
                <h2> Listar Carteiras</h2>
            </div>

            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Status</th>
                        <th>Ativo</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { carteiras.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/carteiras/show/${item.id}`}>{item.nome}</Link></td>
                                <td>{item.cpf}</td>
                                <td>{item.status}</td>
                                <td>{item.ativo?.tipo}</td>
                                <td>{item.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/carteiras/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>
            </table>
        </div>
    );

}

export default ListCarteiras;