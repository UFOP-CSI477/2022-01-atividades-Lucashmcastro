import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { AtivoModel } from '../ativos/ListAtivos';

export interface AcaoModel {
    id: number;
    nome: string;
    descricao: string;
    created_at: string;
    ativo_id: number;
    ativo: AtivoModel;
}

const ListAcoes = () => {

    const [ acoes, setAcoes ] = useState<AcaoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/acoes')        
            .then(response => {
                setAcoes(response.data);
            } );

    }

    const handleDeleteAcao = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Ação?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/acoes', {
                data: {
                    data
                }
            });
            window.alert("Ação excluída com sucesso!");
            
            //loadData();

            setAcoes(acoes.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Ação!");
            console.error(error);
        }
    }

   
    return(
        <div className="container">

            <div className="createButton">
                <button type="button" className="btn btn-outline-warning"><Link to="/ativos/create">Cadastrar</Link></button>          
            </div>

            <div className="section-header sectionPadding">               
                    <h2> Listar Ativos</h2>
                </div>

            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ativo</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { acoes.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/acoes/show/${item.id}`}>{item.nome}</Link></td>
                                <td>{item.descricao}</td>
                                <td>{item.ativo?.tipo}</td>
                                <td>{item.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/acoes/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>
            </table>
        </div>
    );

}

export default ListAcoes;