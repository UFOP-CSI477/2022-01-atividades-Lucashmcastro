import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { PessoaModel } from '../pessoas/ListPessoas';
import { LocalColetaModel } from '../locais_coleta/ListLocaisColeta';


export interface DoacaoModel {
    id: number;
    data: string;
    created_at: string;
    pessoa_id: number;
    pessoa: PessoaModel;
    localColeta_id: number;
    localColeta: PessoaModel;
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
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Pessoa</th>
                        <th>Local Coleta</th>
                        <th>Criação</th>
                        <th>Ação</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>

                    { doacoes.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={`/doacoes/show/${item.id}`}>{item.data}</Link></td>
                                <td>{item.pessoa.nome}</td>
                                <td>{item.localColeta.nome}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/doacoes/show/${item.id}`}>Visualizar</Link> </td>
                                <td><button type="button" onClick={e => {
                                        handleDeleteDoacao(item.id);
                                    }}>Excluir</button>
                                </td>
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