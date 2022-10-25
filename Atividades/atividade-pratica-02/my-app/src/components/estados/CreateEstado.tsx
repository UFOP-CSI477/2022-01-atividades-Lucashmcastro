import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const CreateEstado = () => {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla] = useState('');

    const navigate = useNavigate();

    const handleNewEstado = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateNome() || !validateSigla()) {
            return false;
        }


        const data = {
            nome,
            sigla
        }

        try{

            await api.post('/estados', data);
            alert('Estado Inserido com Sucesso!');
            navigate('/estados');

        } catch(error) {
            alert('Erro ao cadastrar o Estado!');
            console.error(error);
        }


    }

    const validateNome = () => {

        if (nome === "") {
            alert('Informe o nome do Estado!');
            document.getElementById('nome')?.focus();
            return false;
        }

        return true;

    }

    const validateSigla = () => {

        if (sigla === "") {
            alert('Informe a sigla/UF do Estado!');
            document.getElementById('sigla')?.focus();
            return false;
        }

        return true;

    }    

    return (
        <div>
            <h3>Cadastrar Estado: {nome}-{sigla}</h3>
            <form onSubmit={handleNewEstado} className="row g-3">

                <div>                           
                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome do estado"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="sigla" className="form-label">Sigla</label>
                                <input type="text" className="form-control" 
                                    id="sigla" 
                                    placeholder="Sigla do estado"
                                    onChange={e => setSigla(e.target.value)}/>
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

export default CreateEstado;