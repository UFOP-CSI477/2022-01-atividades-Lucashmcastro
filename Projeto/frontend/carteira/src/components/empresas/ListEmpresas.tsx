import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { BolsaModel } from '../bolsas/ListBolsas';

export interface EmpresaModel {
    id: number;
    nome: string;
    setor: string;
    sigla: string;
    created_at: string;
    bolsa_id: number;
    bolsa: BolsaModel;
}

const ListEmpresas = () => {

    const [ empresas, setEmpresas ] = useState<EmpresaModel[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {

        api.get('/empresas')        
            .then(response => {
                setEmpresas(response.data);
            } );

    }

    const handleDeleteEmpresa = async (id : number) => {
        
        if(!window.confirm("Confirma a Exclusão da Empresa?")) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/empresas', {
                data: {
                    data
                }
            });
            window.alert("Empresa excluída com sucesso!");
            
            //loadData();

            setEmpresas(empresas.filter(item => item.id !== id));

        } catch (error) {
            window.alert("Erro ao excluir a Empresa!");
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
                        <th>Setor</th>
                        <th>Sigla</th>
                        <th>Bolsa</th>
                        <th>Criação</th>
                        <th>Ação</th>                     
                    </tr>
                </thead>

                <tbody>

                    { empresas.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/empresas/show/${item.id}`}>{item.nome}</Link></td>
                                <td>{item.setor}</td>
                                <td>{item.sigla}</td>
                                <td>{item.bolsa.nome}-{item.bolsa.origem}</td>
                                <td>{item.created_at}</td>
                                <td><Link to={`/empresas/show/${item.id}`}>Visualizar</Link> </td>                               
                            </tr>
                        )  
                      )
                    }

                </tbody>


            </table>
        </div>
    );

}

export default ListEmpresas;