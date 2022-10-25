import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";
import { TipoSanguineoModel } from "../tipos_sanguineos/ListTiposSanguineos";

const CreatePessoa = () => {

    const navigate = useNavigate();

    const [nome, setNome ] = useState('');
    const [rua, setRua ] = useState('');
    const [numero, setNumero ] = useState('');
    const [complemento, setComplemento ] = useState('');
    const [documento, setDocumento ] = useState('');

    const [cidadeId, setCidadeId ] = useState(0);
    const [tipoSanguineoId, setTipoSanguineoId ] = useState(0);

    const [cidades, setCidades ] = useState<CidadeModel[]>([]);
    const [tiposSanguineos, setTiposSanguineos ] = useState<TipoSanguineoModel[]>([]);


    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/tiposSanguineos')
            .then(response => {
                setTiposSanguineos(response.data);
            })
    }, []);

    const handleNewPessoa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            rua,
            numero,
            complemento,
            documento,
            cidade_id: cidadeId,
            tipoSanguineo_id: tipoSanguineoId
        }

        try {
            await api.post('/pessoas', data);
            navigate('/pessoas');
        } catch (error) {
            alert('Erro ao cadastrar Pessoa!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Pessoas</h3>

            <form onSubmit={handleNewPessoa} className="row g-3">

            <div>                           
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome da Pessoa"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="rua" className="form-label">Rua</label>
                                <input type="text" className="form-control" 
                                    id="rua" 
                                    placeholder="Rua da Pessoa"
                                    onChange={e => setRua(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="numero" className="form-label">Numero</label>
                                <input type="text" className="form-control" 
                                    id="numero" 
                                    placeholder="Numero da Pessoa"
                                    onChange={e => setNumero(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="complemento" className="form-label">Complemento</label>
                                <input type="text" className="form-control" 
                                    id="complemento" 
                                    placeholder="Complemento da Pessoa"
                                    onChange={e => setComplemento(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="documento" className="form-label">Documento</label>
                                <input type="text" className="form-control" 
                                    id="documento" 
                                    placeholder="Documento da Pessoa"
                                    onChange={e => setDocumento(e.target.value)}/>
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
                                            <option value={item.id}>{item.nome}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="tipoSanguineoId" className="form-label">Tipo Sanguineo</label>
                                <select id="tipoSanguineoId" className="form-select"
                                
                                onChange={e => setTipoSanguineoId(parseInt(e.target.value))}
                                >
                                    <option
                                        value="0" selected>Selecione</option>

                                    {
                                        tiposSanguineos.map(item => (
                                            <option value={item.id}>{item.tipo}</option>
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
                />

                <SelectTiposSanguineos 
                    id={tipoSanguineoId} 
                    setId={setTipoSanguineoId}
                />   */}

            </form>
        </div>
    );

}

export default CreatePessoa;