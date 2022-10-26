import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AtivoModel } from "../ativos/ListAtivos";

const CreateCarteira = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [status, setStatus] = useState('');

    const [ativoId, setAtivoId] = useState(0);

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);

    useEffect(() => {
        api.get('/carteiras')
            .then(response => {
                setAtivos(response.data);
            })
    }, []);

    const handleNewCarteira = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            cpf,
            status,
            ativo_id: ativoId
        }

        try {
            await api.post('/carteiras', data);
            navigate('/carteiras');
        } catch (error) {
            alert('Erro ao cadastrar a Carteira!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Carteira</h3>

            <form onSubmit={handleNewCarteira} className="row g-3">

                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome desejado"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">CPF</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="CPF"
                                    onChange={e => setCpf(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="status" className="form-label">Status</label>
                                <input type="text" className="form-control" 
                                    id="status" 
                                    placeholder="Status da Carteira"
                                    onChange={e => setStatus(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
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

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>
            </form>

        </div>
                
    );

}

export default CreateCarteira;