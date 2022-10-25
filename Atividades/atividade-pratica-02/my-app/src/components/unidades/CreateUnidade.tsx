import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";
import SelectCidades from "../cidades/SelectCidades";

const CreateUnidade = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidadeId, setCidadeId] = useState(0);

    const [cidades, setCidades] = useState<CidadeModel[]>([]);

    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
    }, []);

    const handleNewUnidade = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            numero,
            complemento,
            cidade_id: cidadeId
        }

        try {
            await api.post('/unidades', data);
            navigate('/unidades');
        } catch (error) {
            alert('Erro ao cadastrar a unidade!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Unidade</h3>

            <form onSubmit={handleNewUnidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da unidade"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="numero">Numero</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="Número da unidade"
                        value={numero}
                        onChange={e => setNumero(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="Complemento da unidade"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="cidadeId">cidadeId</label>
                    <input
                        type="text"
                        name="cidadeId"
                        id="cidadeId"
                        placeholder="Cidade ID da unidade"
                        value={cidadeId}
                        onChange={e => setCidadeId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="cidade"
                        id="cidade"
                        value={cidadeId}
                        onChange={e => setCidadeId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            cidades.map(item => (
                                <option value={item.id}>{item.nome}</option>
                            ))
                        }

                    </select>
                </div>

                <SelectCidades 
                    id={cidadeId} 
                    setId={setCidadeId}
                />

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateUnidade;