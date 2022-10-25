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

            <form onSubmit={handleNewUnidade} className="row g-3">

                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome da Unidade"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="numero" className="form-label">Numero</label>
                                <input type="text" className="form-control" 
                                    id="numero" 
                                    placeholder="Numero da Unidade"
                                    onChange={e => setNumero(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="complemento" className="form-label">Complemento</label>
                                <input type="text" className="form-control" 
                                    id="complemento" 
                                    placeholder="Complemento da Unidade"
                                    onChange={e => setComplemento(e.target.value)}/>
                            </div>

                           
                            <div className="col-md-4">
                                <label htmlFor="cidadeId" className="form-label">Cidade</label>
                                <select id="cidadeId" className="form-select"
                                
                                onChange={e => setCidadeId(parseInt(e.target.value))}
                                >
                                    <option
                                        value="0" selected>Selecione</option>
                                    {
                                        cidades.map(item => (
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

                {/* <SelectCidades 
                    id={cidadeId} 
                    setId={setCidadeId}
                /> */}
            </form>
        </div>
    );

}

export default CreateUnidade;