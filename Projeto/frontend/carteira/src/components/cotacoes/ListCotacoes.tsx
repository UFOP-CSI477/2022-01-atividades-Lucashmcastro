import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { EmpresaModel } from '../empresas/ListEmpresas';
import { BolsaModel } from '../bolsas/ListBolsas';

export interface CotacaoModel {
    id: number;
    valor: string;
    date: string;
    created_at: string;
    empresa_id: number;
    empresa: EmpresaModel;
    bolsa_id: number;
    bolsa: BolsaModel;
}

const ListCotacoes = () => {

    const [ cotacoes, setCotacoes ] = useState<CotacaoModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/cotacoes')        
            .then(response => {
                setCotacoes(response.data);
            } );

    }

    const handleDeleteCotacao = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Cotação?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/cotacoes', {
                data: {
                    data
                }
            });
            window.alert("Cotação excluída com sucesso!");
            
            //loadData();

            setCotacoes(cotacoes.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Cotação!");
            console.error(error);
        }
    }

   
    return(
        <div className="container">
            <div className="createButton">
                <button type="button" className="btn btn-outline-warning"><Link to="/cotacoes/create">Cadastrar</Link></button>          
            </div>
            
            <div className="section-header sectionPadding">               
                <h2> Listar Cotações</h2>
            </div>

            <table className="table table-hove">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Empresa</th>
                        <th>Bolsa</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>

                    { cotacoes.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/cotacoes/show/${item.id}`}>{item.valor}</Link></td>
                                <td>{item.date}</td>
                                <td>{item.empresa?.nome}</td>
                                <td>{item.bolsa.nome}</td>
                                <td>{item.created_at}</td>
                                <td><Link className="btn btn-primary" to={`/cotacoes/show/${item.id}`}>Visualizar</Link> </td>
                            </tr>
                        )  
                      )
                    }

                </tbody>
            </table>
        </div>
    );

}

export default ListCotacoes;