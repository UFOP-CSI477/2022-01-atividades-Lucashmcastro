import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";

const CreateLocalColeta = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
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

    const handleNewLocalColeta = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            rua,
            numero,
            complemento,
            cidade_id: cidadeId
        }

        try {
            await api.post('/locaisColeta', data);
            navigate('/locaisColeta');
        } catch (error) {
            alert('Erro ao cadastrar o Local da Coleta!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Local de Coleta</h3>

            <form onSubmit={handleNewLocalColeta} className="row g-3">
               
                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome do Local da Coleta"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="rua" className="form-label">Rua</label>
                                <input type="text" className="form-control" 
                                    id="rua" 
                                    placeholder="Rua do Local da Coleta"
                                    onChange={e => setRua(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="numero" className="form-label">Numero</label>
                                <input type="text" className="form-control" 
                                    id="numero" 
                                    placeholder="Numero do Local da Coleta"
                                    onChange={e => setNumero(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="complemento" className="form-label">Complemento</label>
                                <input type="text" className="form-control" 
                                    id="complemento" 
                                    placeholder="Complemento do Local da Coleta"
                                    onChange={e => setComplemento(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="cidadeid" className="form-label">Cidade da Coleta</label>
                                <select id="cidadeid" className="form-select"
                                
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

export default CreateLocalColeta;