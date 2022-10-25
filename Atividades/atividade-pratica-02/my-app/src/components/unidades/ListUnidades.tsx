import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { CidadeModel } from '../cidades/ListCidades';

export interface UnidadeModel {
    id: number;
    nome: string;
    numero: string;
    complemento: string;
    created_at: string;
    cidade_id: number;
    cidade: CidadeModel;
}

const ListUnidades = () => {

    const [ unidades, setUnidades ] = useState<UnidadeModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/unidades')        
            .then(response => {
                setUnidades(response.data);
            } );

    }

    const handleDeleteUnidade = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Unidade?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/unidades', {
                data: {
                    data
                }
            });
            window.alert("Unidade excluída com sucesso!");
            
            //loadData();

            setUnidades(unidades.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Unidade!");
            console.error(error);
        }
    }

    return(
        <div>
            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>Cidade</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { unidades.map( item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.numero}</td>
                                <td>{item.complemento}</td>
                                <td>{item.cidade.nome}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/unidades/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListUnidades;