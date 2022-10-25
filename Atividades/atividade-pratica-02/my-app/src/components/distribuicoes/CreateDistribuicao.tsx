import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ProdutoModel } from "../produtos/ListProdutos";
import { UnidadeModel } from "../unidades/ListUnidades";

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
            date: new Date (dataDistribuicao).toLocaleDateString(),
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

            <form onSubmit={handleNewDistribuicao} className="row g-3">

            <div>                           
                            <div className="col-md-6">
                                <label htmlFor="dataDistribuicao" className="form-label">Data da Distribuição</label>
                                <input type="date" className="form-control" 
                                    id="dataDistribuicao" 
                                    placeholder="Data de Distribuição"
                                    value={dataDistribuicao}
                                    onChange={e => setDataDistribuicao(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="produto" className="form-label">Produto</label>
                                <select id="produto" className="form-select"
                                
                                onChange={e => setProdutoId(parseInt(e.target.value))}>
                                <option
                                    value="0" selected>Selecione</option>

                            {
                                    produtos.map(item => (
                                        <option key={item.id} value={item.id}>{item.etiqueta}</option>
                                    ))
                                }
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="unidade" className="form-label">Unidade</label>
                                <select id="unidade" className="form-select"
                                
                                onChange={e => setUnidadeId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    unidades.map(item => (
                                        <option key={item.id} value={item.id}>{item.nome}</option>
                                    ))
                                }
                                </select>
                            </div>

                            {/* <SelectEstados 
                                id={estadoId} 
                                setId={setEstadoId}
                            /> */}

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>
                                                        
                {/* <SelectProdutos 
                    id={produtoId} 
                    setId={setProdutoId}
                />

                <SelectUnidades 
                    id={unidadeId} 
                    setId={setUnidadeId}
                />   */}

            </form>
        </div>
    );

}

export default CreateDistribuicao;