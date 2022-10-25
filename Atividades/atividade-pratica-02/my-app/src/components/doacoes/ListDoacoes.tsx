import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { PessoaModel } from '../pessoas/ListPessoas';
import { LocalColetaModel } from '../locais_coleta/ListLocaisColeta';

export interface DoacaoModel {
    id: number;
    date: string;
    created_at: string;
    pessoa_id: number;
    pessoa: PessoaModel;
    localColeta_id: number;
    local: LocalColetaModel;
}

const ListDoacoes = () => {

    const [ doacoes, setDoacoes ] = useState<DoacaoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/doacoes')        
            .then(response => {
                setDoacoes(response.data);
            } );

    }

    const handleDeleteDoacao = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Doação?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/doacoes', {
                data: {
                    data
                }
            });
            window.alert("Doacão excluída com sucesso!");
            
            //loadData();

            setDoacoes(doacoes.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Doação!");
            console.error(error);
        }
    }

    return(
        <div>
            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Pessoa</th>
                        <th>Local Coleta</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { doacoes.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/doacoes/show/${item.id}`}>{item.date}</Link></td>
                                <td>{item.pessoa?.nome}</td>
                                <td>{item.local.nome}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/doacoes/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>
            </table>
        </div>
    );

}

export default ListDoacoes;