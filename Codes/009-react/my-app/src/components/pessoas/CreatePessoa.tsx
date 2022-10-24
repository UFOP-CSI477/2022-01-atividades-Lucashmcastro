import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";
import SelectCidades from "../cidades/SelectCidades";
import { TipoSanguineoModel } from "../tipos_sanguineos/ListTiposSanguineos";
import SelectTiposSanguineos from "../tipos_sanguineos/SelectTiposSanguineos";

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

            <form onSubmit={handleNewPessoa}>

                <div>
                    <label htmlFor="nome">Nome da Pessoa</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da Pessoa"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="rua">Rua da Pessoa</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        placeholder="Rua da Pessoa"
                        value={rua}
                        onChange={e => setRua(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="numero">Numero da Pessoa</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="Numero da Pessoa"
                        value={numero}
                        onChange={e => setNumero(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento da Pessoa</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="Complemento da Pessoa"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)} />
                </div>
                

                <div>
                    <label htmlFor="documento">Documento da Pessoa</label>
                    <input
                        type="text"
                        name="documento"
                        id="documento"
                        placeholder="Documento da Pessoa"
                        value={documento}
                        onChange={e => setDocumento(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="cidadeId">cidadeId</label>
                    <input
                        type="text"
                        name="cidadeId"
                        id="cidadeId"
                        placeholder="Cidade ID da Pessoa"
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

                <div>
                    <label htmlFor="tipoSanguineoId">unidadeId</label>
                    <input 
                        type="text"
                        name="tipoSanguineoId"
                        id="tipoSanguineoId"
                        placeholder="Tipo Sanguineo da Pessoa"
                        value={tipoSanguineoId}
                        onChange={e => setTipoSanguineoId(parseInt(e.target.value))} />
                </div>

                <div>
                    <select name="tipoSanguineo"
                        id="tipoSanguineo"
                        value={tipoSanguineoId}
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

                <SelectCidades 
                    id={cidadeId} 
                    setId={setCidadeId}
                />

                <SelectTiposSanguineos 
                    id={tipoSanguineoId} 
                    setId={setTipoSanguineoId}
                />  

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreatePessoa;