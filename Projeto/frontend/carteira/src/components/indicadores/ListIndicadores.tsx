import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { BolsaModel } from '../bolsas/ListBolsas';

export interface IndicadorModel {
    id: number;
    nome: string;
    tipo: string;
    valor: string;
    created_at: string;
    bolsa_id: number;
    bolsa: BolsaModel;
}

const ListIndicadores = () => {

    const [ indicadores, setIndicadores ] = useState<IndicadorModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/indicadores')        
            .then(response => {
                setIndicadores(response.data);
            } );

    }

    const handleDeleteIndicador = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Indicador?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/indicadores', {
                data: {
                    data
                }
            });
            window.alert("indicador excluído com sucesso!");
            
            //loadData();

            setIndicadores(indicadores.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Indicador!");
            console.error(error);
        }
    }

    return(
        <div className="container">
            <div className="createButton">
                <button type="button" className="btn btn-outline-warning"><Link to="/indicadores/create">Cadastrar</Link></button>          
            </div>
            
            <div className="section-header sectionPadding">               
                <h2> Listar Indicadores</h2>
            </div>
        
            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Bolsa</th>
                        <th>Criação</th>
                        <th>Ação</th>                     
                    </tr>
                </thead>

                <tbody>

                    { indicadores.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/indicadores/show/${item.id}`}>{item.nome}</Link></td>
                                <td>{item.tipo}</td>
                                <td>{item.valor}</td>
                                <td>{item.bolsa.nome}-{item.bolsa.origem}</td>
                                <td>{item.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/indicadores/show/${item.id}`}>Visualizar</Link> </td>                               
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListIndicadores;