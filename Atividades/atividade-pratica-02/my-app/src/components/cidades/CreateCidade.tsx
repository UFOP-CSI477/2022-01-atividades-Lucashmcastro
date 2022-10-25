import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "../estados/ListEstados";
import SelectEstados from "../estados/SelectEstados";

const CreateCidade = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState(0);

    const [estados, setEstados] = useState<EstadoModel[]>([]);

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    const handleNewCidade = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            estado_id: estadoId
        }

        try {
            await api.post('/cidades', data);
            navigate('/cidades');
        } catch (error) {
            alert('Erro ao cadastrar a cidade!');
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Cadastrar Cidade</h3>

            <form onSubmit={handleNewCidade} className="row g-3">

                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome da cidade"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="estado" className="form-label">Estado</label>
                                <select id="estado" className="form-select"                               
                                onChange={e => setEstadoId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                            {
                                estados.map(item => (
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
            </form>

        </div>
                
    );

}

export default CreateCidade;