import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";

const CreateAtivo = () => {

    const navigate = useNavigate();

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');

    const [bolsaId, setBolsaId] = useState(0);

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    useEffect(() => {
        api.get('/bolsas')
            .then(response => {
                setBolsas(response.data);
             })
    }, []);

    const handleNewAtivos = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            tipo,
            descricao,
            bolsa_id: bolsaId
        }

        try {
            await api.post('/ativos', data);
            navigate('/ativos');
        } catch (error) {
            alert('Erro ao cadastrar a Ativos!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Ativos</h3>

            <form onSubmit={handleNewAtivos} className="row g-3">

                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="tipo" className="form-label">Tipo</label>
                                <input type="text" className="form-control" 
                                    id="tipo" 
                                    placeholder="Tipo do Ativo"
                                    onChange={e => setTipo(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="descricao" className="form-label">Descrição</label>
                                <input type="text" className="form-control" 
                                    id="descricao" 
                                    placeholder="Descricao da Ação"
                                    onChange={e => setDescricao(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
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

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>
            </form>

        </div>
                
    );

}

export default CreateAtivo;