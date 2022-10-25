import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const CreateTipoSanguineo = () => {

    const [ tipo, setTipo ] = useState('');
    const [ fator, setFator] = useState('');

    const navigate = useNavigate();

    const handleNewTipoSanguineo = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateTipo() || !validateFator()) {
            return false;
        }


        const data = {
            tipo,
            fator
        }

        try{

            await api.post('/tiposSanguineos', data);
            alert('Tipo Sanguineo Inserido com Sucesso!');
            navigate('/tiposSanguineos');

        } catch(error) {
            alert('Erro ao cadastrar o Tipo Sanguineo!');
            console.error(error);
        }


    }

    const validateTipo = () => {

        if (tipo === "") {
            alert('Informe o tipo Sanguineo!');
            document.getElementById('tipo')?.focus();
            return false;
        }

        return true;

    }

    const validateFator = () => {

        if (fator === "") {
            alert('Informe o fator do Tipo Sanguineo!');
            document.getElementById('fator')?.focus();
            return false;
        }

        return true;

    }    

    return (
        <div>
            <h3>Cadastrar Tipo Sanguineo: {tipo}-{fator}</h3>
            <form onSubmit={handleNewTipoSanguineo} className="row g-3">

                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="tipo" className="form-label">Tipo</label>
                                <input type="text" className="form-control" 
                                    id="tipo" 
                                    placeholder="Tipo do Sangue"
                                    onChange={e => setTipo(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="fator" className="form-label">Fator</label>
                                <input type="text" className="form-control" 
                                    id="fator" 
                                    placeholder="Fator do Sangue"
                                    onChange={e => setFator(e.target.value)}/>
                            </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>       
            </form>
        </div>
    );

}

export default CreateTipoSanguineo;