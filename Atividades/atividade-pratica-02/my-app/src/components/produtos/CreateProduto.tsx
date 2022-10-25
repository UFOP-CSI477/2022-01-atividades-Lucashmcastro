import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { DoacaoModel } from "../doacoes/ListDoacoes";
import SelectDoacoes from "../doacoes/SelectDoacoes";

const CreateProduto = () => {

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

    const handleNewProduto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            etiqueta,
            validade: new Date (validade).toLocaleDateString(),
            doacao_id: doacaoId
        }
        console.log(data);

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

            <form onSubmit={handleNewProduto} className="row g-3">

            <div>                           
                            <div className="col-md-6">
                                <label htmlFor="etiqueta" className="form-label">Etiqueta</label>
                                <input type="text" className="form-control" 
                                    id="etiqueta" 
                                    placeholder="Etiqueta do produto"
                                    onChange={e => setEtiqueta(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="validade" className="form-label">Validade</label>
                                <input type="date" className="form-control" 
                                    id="validade" 
                                    placeholder="Validade do produto"
                                    onChange={e => setValidade(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="doacao" className="form-label">Doação</label>
                                <select id="doacao" className="form-select"
                                
                                onChange={e => setDoacaoId(parseInt(e.target.value))}
                                >
                                    <option
                                        value="0" selected>Selecione</option>

                                    {
                                        doacoes.map(item => (
                                            <option key={item.id} value={item.id}>{item.id}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            {/* <SelectDoacoes 
                                id={doacaoId} 
                                setId={setDoacaoId}
                            /> */}

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>                                         
            </form>
        </div>
    );

}

export default CreateProduto;