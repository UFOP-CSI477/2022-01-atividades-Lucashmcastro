import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";


const CreateIndicador = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');

    const [bolsaId, setBolsaId] = useState(0);

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    useEffect(() => {
        api.get('/bolsas')
            .then(response => {
                setBolsas(response.data);
            })
    }, []);


    const handleNewIndicador = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            tipo,
            valor,            
            bolsa_id: bolsaId
        }

        try {
            await api.post('/indicadores', data);
            navigate('/indicadores');
        } catch (error) {
            alert('Erro ao cadastrar a Indicador!');
            console.error(error);
        }

    }

    return (
        <div className="container createForm">
            <h3>Cadastrar Indicador</h3>

            <form onSubmit={handleNewIndicador} className="row g-3">

                <div>                           
                            <div>
                                <label htmlFor="nome" className="form-label">nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome do Indicador"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="tipo" className="form-label">Tipo</label>
                                <input type="text" className="form-control" 
                                    id="tipo" 
                                    placeholder="Tipo do Indicador "
                                    onChange={e => setTipo(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="valor" className="form-label">Valor (%)</label>
                                <input type="number" step="0.01" className="form-control" 
                                    id="valor" 
                                    placeholder="Valor do Indicador"
                                    onChange={e => setValor(e.target.value)}/>
                            </div>
                       
                            <div>
                                <label htmlFor="bolsa" className="form-label">Bolsa</label>
                                <select id="bolsa" className="form-select"                               
                                onChange={e => setBolsaId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    bolsas.map(item => (
                                        <option key={item.id} value={item.id}>{item.nome}</option>
                                    ))
                                }
                                </select>
                            </div>                

                        <div className="createButton">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>
            </form>

        </div>
                
    );

}

export default CreateIndicador;