import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AtivoModel } from "../ativos/ListAtivos";

const CreateAcao = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [ativoId, setAtivoId] = useState(0);

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);

    useEffect(() => {
        api.get('/ativos')
            .then(response => {
                setAtivos(response.data);
            })
    }, []);

    const handleNewAcao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            ativo_id: ativoId
        }

        try {
            await api.post('/acoes', data);
            navigate('/acoes');
        } catch (error) {
            alert('Erro ao cadastrar a Ação!');
            console.error(error);
        }

    }

    return (
        <div className="container createForm">
            <h3>Cadastrar Ação</h3>

            <form onSubmit={handleNewAcao} className="row g-3">

                <div>                           
                            <div>
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome da Ação"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="descricao" className="form-label">Descrição</label>
                                <input type="text" className="form-control" 
                                    id="descricao" 
                                    placeholder="Descricao da Ação"
                                    onChange={e => setDescricao(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="ativo" className="form-label">Ativo</label>
                                <select id="ativos" className="form-select"                               
                                onChange={e => setAtivoId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    ativos.map(item => (
                                        <option key={item.id} value={item.id}>{item.tipo}</option>
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

export default CreateAcao;