import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { CidadeModel } from '../cidades/ListCidades';

export interface LocalColetaModel {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    created_at: string;
    cidade_id: number;
    cidade: CidadeModel;
}

const ListLocaisColeta = () => {

    const [ locaisColeta, setLocaisColeta ] = useState<LocalColetaModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/locaisColeta')        
            .then(response => {
                setLocaisColeta(response.data);
            } );

    }

    const handleDeleteLocalColeta = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão do Local Coleta?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/locaisColeta', {
                data: {
                    data
                }
            });
            window.alert("Local Coleta excluído com sucesso!");
            
            //loadData();

            setLocaisColeta(locaisColeta.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir o Local de Coleta!");
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
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>Cidade</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { locaisColeta.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.rua}</td>
                                <td>{item.numero}</td>
                                <td>{item.complemento}</td>
                                <td>{item.cidade?.nome}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/locaisColeta/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListLocaisColeta;