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
            <form onSubmit={handleNewTipoSanguineo}>

                <div>
                    <label 
                        htmlFor="tipo"
                    >Tipo</label>

                    <input type="text" 
                        name="tipo" 
                        id="tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                        placeholder="Tipo Sanguineo"
                        />
                </div>

                <div>
                    <label 
                        htmlFor="fator"
                    >Fator</label>

                    <input type="text" 
                        name="fator" 
                        id="fator" 
                        value={fator}
                        onChange={e => setFator(e.target.value)}
                        placeholder="Fator do Tipo Sanguineo"
                        />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );

}

export default CreateTipoSanguineo;