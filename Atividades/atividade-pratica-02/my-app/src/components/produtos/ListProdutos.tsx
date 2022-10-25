import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { DoacaoModel } from '../doacoes/ListDoacoes';

export interface ProdutoModel {
    id: number;
    etiqueta: string;
    validade: string;
    created_at: string;
    doacao_id: number;
    doacao: DoacaoModel;
}

const ListProdutos = () => {

    const [ produtos, setProdutos ] = useState<ProdutoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/produtos')        
            .then(response => {
                setProdutos(response.data);
            } );

    }

    const handleDeleteProduto = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão do Produto?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/produtos', {
                data: {
                    data
                }
            });
            window.alert("Produto excluído com sucesso!");
            
            //loadData();

            setProdutos(produtos.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir o Produto!");
            console.error(error);
        }
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Etiqueta</th>
                        <th>Validade</th>
                        <th>Doacao</th>
                        <th>Criação</th>
                        <th>Ação</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>

                    { produtos.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/produtos/show/${item.id}`}>{item.etiqueta}</Link></td>
                                <td>{item.validade}</td>
                                <td>{item.doacao.data}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/produtos/show/${item.id}`}>Visualizar</Link> </td>
                                <td><button type="button" onClick={e => {
                                        handleDeleteProduto(item.id);
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

export default ListProdutos;