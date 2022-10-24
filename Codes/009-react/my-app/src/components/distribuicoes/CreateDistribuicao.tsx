import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ProdutoModel } from "../produtos/ListProdutos";
import SelectProdutos from "../produtos/SelectProdutos";
import { UnidadeModel } from "../unidades/ListUnidades";
import SelectUnidades from "../unidades/SelectUnidades";

const CreateDistribuicao = () => {

    const navigate = useNavigate();

    const [dataDistribuicao, setDataDistribuicao ] = useState('');
    const [produtoId, setProdutoId] = useState(0);
    const [unidadeId, setUnidadeId] = useState(0);

    const [produtos, setProdutos] = useState<ProdutoModel[]>([]);
    const [unidades, setUnidades] = useState<UnidadeModel[]>([]);


    useEffect(() => {
        api.get('/produtos')
            .then(response => {
                setProdutos(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/unidades')
            .then(response => {
                setUnidades(response.data);
            })
    }, []);

    const handleNewDistribuicao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            dataDistribuicao,
            produto_id: produtoId,
            unidade_id: unidadeId
        }

        try {
            await api.post('/distribuicoes', data);
            navigate('/distribuicoes');
        } catch (error) {
            alert('Erro ao cadastrar a Distribuição!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Distribuição</h3>

            <form onSubmit={handleNewDistribuicao}>

                <div>
                    <label htmlFor="dataDoacao">Data da Distribuição</label>
                    <input
                        type="text"
                        name="dataDistribuicao"
                        id="dataDistribuicao"
                        placeholder="Data da Distribuição"
                        value={dataDistribuicao}
                        onChange={e => setDataDistribuicao(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="produtoId">pessoaId</label>
                    <input
                        type="text"
                        name="produtoId"
                        id="produtoId"
                        placeholder="Produto ID da Distribuicao"
                        value={produtoId}
                        onChange={e => setProdutoId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="produto"
                        id="produto"
                        value={produtoId}
                        onChange={e => setProdutoId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            produtos.map(item => (
                                <option value={item.id}>{item.etiqueta}</option>
                            ))
                        }

                    </select>
                </div>

                <div>
                    <label htmlFor="unidadeId">unidadeId</label>
                    <input 
                        type="text"
                        name="unidadeId"
                        id="unidadeId"
                        placeholder="Unidade da Distribuição"
                        value={unidadeId}
                        onChange={e => setUnidadeId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="unidade"
                        id="unidade"
                        value={unidadeId}
                        onChange={e => setUnidadeId(parseInt(e.target.value))}
                    >
                        <option
                            value="0" selected>Selecione</option>

                        {
                            unidades.map(item => (
                                <option value={item.id}>{item.nome}</option>
                            ))
                        }

                    </select>
                </div>

                <SelectProdutos 
                    id={produtoId} 
                    setId={setProdutoId}
                />

                <SelectUnidades 
                    id={unidadeId} 
                    setId={setUnidadeId}
                />  

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateDistribuicao;