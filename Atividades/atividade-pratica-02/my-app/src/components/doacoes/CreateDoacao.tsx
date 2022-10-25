import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { LocalColetaModel } from "../locais_coleta/ListLocaisColeta";
import SelectLocaisColeta from "../locais_coleta/SelectLocaisColeta";
import { PessoaModel } from "../pessoas/ListPessoas";
import SelectPessoas from "../pessoas/SelectPessoas";

const CreateDoacao = () => {

    const navigate = useNavigate();

    const [dataDoacao, setDataDoacao] = useState('');
    const [pessoaId, setPessoaId] = useState(0);
    const [localColetaId, setLocalColetaId] = useState(0);

    const [pessoas, setPessoas] = useState<PessoaModel[]>([]);
    const [locaisColeta, setLocaisColeta] = useState<LocalColetaModel[]>([]);


    useEffect(() => {
        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/locaisColeta')
            .then(response => {
                setLocaisColeta(response.data);
            })
    }, []);

    const handleNewDoacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            date: dataDoacao,
            local_id: localColetaId,
            pessoa_id: pessoaId
        }

        try {
            await api.post('/doacoes', data);
            navigate('/doacoes');
        } catch (error) {
            alert('Erro ao cadastrar a Doacao!');
            console.error(error);
        }
    }

    return (
        <div>
            <h3>Cadastrar Doacao</h3>

            <form onSubmit={handleNewDoacao} className="row g-3">

                            <div className="col-md-6">
                                <label htmlFor="dataDoacao" className="form-label">Data da Doação</label>
                                <input type="date" className="form-control" 
                                    id="dataDoacao" 
                                    placeholder="Data de Distribuição"
                                    onChange={e => setDataDoacao(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="pessoa" className="form-label">Pessoa</label>
                                <select id="pessoa" className="form-select"
                                
                                onChange={e => setPessoaId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    pessoas.map(item => (
                                        <option value={item.id}>{item.nome}</option>
                                    ))
                                }

                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="localColeta" className="form-label">Local da Coleta</label>
                                <select id="localColeta" className="form-select"
                                
                                onChange={e => setLocalColetaId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    locaisColeta.map(item => (
                                        <option value={item.id}>{item.nome}</option>
                                    ))
                                }
                                </select>
                            </div>

                             {/* <SelectPessoas 
                                id={pessoaId} 
                                setId={setPessoaId}
                            />

                            <SelectLocaisColeta 
                                id={localColetaId} 
                                setId={setLocalColetaId}
                            />   */}

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
            </form>
        </div>
    );

}

export default CreateDoacao;