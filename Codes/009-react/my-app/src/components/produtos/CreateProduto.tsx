import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { DoacaoModel } from "../doacoes/ListDoacoes";
import SelectProdutos from "../produtos/SelectProdutos";

const CreateDoacao = () => {

    const navigate = useNavigate();

    const [etiqueta, setEtiqueta] = useState('');
    const [validade, setValidade] = useState('');
    const [doacaoId, setDoacaoId] = useState(0);

    const [doacoes, setDoacoes] = useState<DoacaoModel[]>([]);

    useEffect(() => {
        api.get('/doacoes')
            .then(response => {
                setDoacoes(response.data);
            })
    }, []);

    const handleNewDoacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            etiqueta,
            validade,
            doacao_id: doacaoId
        }

        try {
            await api.post('/produtos', data);
            navigate('/produtos');
        } catch (error) {
            alert('Erro ao cadastrar o Produto!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Produto</h3>

            <form onSubmit={handleNewProduto}>

                <div>
                    <label htmlFor="etiqueta">Etiqueta</label>
                    <input
                        type="text"
                        name="etiqueta"
                        id="etiqueta"
                        placeholder="Etiqueta do Produto"
                        value={etiqueta}
                        onChange={e => setEtiqueta(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="validade">Validade</label>
                    <input
                        type="text"
                        name="validade"
                        id="validade"
                        placeholder="Validade do Produto"
                        value={validade}
                        onChange={e => setValidade(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="doacaoId">doacaoId</label>
                    <input
                        type="text"
                        name="doacaoId"
                        id="doacaoId"
                        placeholder="Doacao ID do produto"
                        value={doacaoId}
                        onChange={e => setDoacaoId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="doacao"
                        id="doacao"
                        value={doacaoId}
                        onChange={e => setDoacaoId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            doacoes.map(item => (
                                <option value={item.id}>{item.pessoa}</option>
                            ))
                        }

                    </select>
                </div>

                <SelectProdutos 
                    id={doacaoId} 
                    setId={setDoacaoId}
                />

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateProduto;