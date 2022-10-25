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
            dataDoacao,
            localColeta_id: localColetaId,
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

            <form onSubmit={handleNewDoacao}>

                <div>
                    <label htmlFor="dataDoacao">Data</label>
                    <input
                        type="text"
                        name="dataDoacao"
                        id="dataDoacao"
                        placeholder="Data da Doacao"
                        value={dataDoacao}
                        onChange={e => setDataDoacao(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="pessoaId">pessoaId</label>
                    <input
                        type="text"
                        name="pessoaId"
                        id="pessoaId"
                        placeholder="Oessoa ID da Doacao"
                        value={pessoaId}
                        onChange={e => setPessoaId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="pessoa"
                        id="pessoa"
                        value={pessoaId}
                        onChange={e => setPessoaId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            pessoas.map(item => (
                                <option value={item.id}>{item.nome}</option>
                            ))
                        }

                    </select>
                </div>

                <div>
                    <label htmlFor="localColetaId">localColetaId</label>
                    <input
                        type="text"
                        name="localColetaId"
                        id="localColetaId"
                        placeholder="Local Coleta ID da Doacao"
                        value={localColetaId}
                        onChange={e => setLocalColetaId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="localColeta"
                        id="localColeta"
                        value={localColetaId}
                        onChange={e => setLocalColetaId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            locaisColeta.map(item => (
                                <option value={item.id}>{item.nome}</option>
                            ))
                        }

                    </select>
                </div>

                <SelectPessoas 
                    id={pessoaId} 
                    setId={setPessoaId}
                />

                <SelectLocaisColeta 
                    id={localColetaId} 
                    setId={setLocalColetaId}
                />  

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateDoacao;