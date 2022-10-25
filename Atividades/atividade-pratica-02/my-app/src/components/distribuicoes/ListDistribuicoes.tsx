import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { ProdutoModel } from '../produtos/ListProdutos';
import { UnidadeModel } from '../unidades/ListUnidades';


export interface DistribuicaoModel {
    id: number;
    data: string;
    created_at: string;
    produto_id: number;
    produto: ProdutoModel;
    unidade_id: number;
    unidade: UnidadeModel;
}

const ListDistribuicoes = () => {

    const [ distribuicoes, setDistribuicoes ] = useState<DistribuicaoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/distribuicoes')        
            .then(response => {
                setDistribuicoes(response.data);
            } );

    }

    const handleDeleteDistribuicao = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Distribuição?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/distribuicoes', {
                data: {
                    data
                }
            });
            window.alert("Distribuição excluída com sucesso!");
            
            //loadData();

            setDistribuicoes(distribuicoes.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Distribuição!");
            console.error(error);
        }
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data da Distribuição</th>
                        <th>Produto</th>
                        <th>Unidade</th>
                        <th>Criação</th>
                        <th>Ação</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>

                    { distribuicoes.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/distribuicoes/show/${item.id}`}>{item.data}</Link></td>
                                <td>{item.produto.etiqueta}</td>
                                <td>{item.unidade.nome}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/distribuicoes/show/${item.id}`}>Visualizar</Link> </td>
                                <td><button type="button" onClick={e => {
                                        handleDeleteDistribuicao(item.id);
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

export default ListDistribuicoes;