import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { CidadeModel } from '../cidades/ListCidades';
import { TipoSanguineoModel } from '../tipos_sanguineos/ListTiposSanguineos';


export interface PessoaModel {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    documento: string;
    created_at: string;
    cidade_id: number;
    cidade: CidadeModel;
    tipoSanguineo_id: number;
    tipoSanguineo: TipoSanguineoModel;
}

const ListPessoas = () => {

    const [ pessoas, setPessoas ] = useState<PessoaModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/pessoas')        
            .then(response => {
                setPessoas(response.data);
            } );

    }

    const handleDeletePessoa = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Pessoa?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/pessoas', {
                data: {
                    data
                }
            });
            window.alert("Pessoa excluída com sucesso!");
            
            //loadData();

            setPessoas(pessoas.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Pessoa!");
            console.error(error);
        }
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>Documento</th>
                        <th>Cidade</th>
                        <th>Tipo Sanguineo</th>
                        <th>Criação</th>
                        <th>Ação</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>

                    { pessoas.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={`/pessoas/show/${item.id}`}>{item.nome}</Link></td>
                                <td>{item.nome}</td>
                                <td>{item.rua}</td>
                                <td>{item.numero}</td>
                                <td>{item.complemento}</td>
                                <td>{item.documento}</td>
                                <td>{item.cidade.nome}</td>
                                <td>{item.tipoSanguineo.tipo}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/pessoas/show/${item.id}`}>Visualizar</Link> </td>
                                <td><button type="button" onClick={e => {
                                        handleDeletePessoa(item.id);
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

export default ListPessoas;