import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateBolsa = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [origem, setOrigem] = useState('');
    const [status, setStatus] = useState('');


    const handleNewBolsas = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            origem,
            status
        }

        try {
            await api.post('/bolsas', data);
            navigate('/bolsas');
        } catch (error) {
            alert('Erro ao cadastrar a Bolsa!');
            console.error(error);
        }

    }

    return (
        <div className="container createForm">
            <h3>Cadastrar Bolsas</h3>

            <form onSubmit={handleNewBolsas} className="row g-3">

                <div>                           
                            <div>
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome da Bolsa"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div >
                                <label htmlFor="origem" className="form-label">Origem</label>
                                <input type="text" className="form-control" 
                                    id="origem" 
                                    placeholder="Origem da Bolsa"
                                    onChange={e => setOrigem(e.target.value)}/>
                            </div>

                            <div >
                                <label htmlFor="status" className="form-label">Status</label>
                                <input type="text" className="form-control" 
                                    id="status" 
                                    placeholder="Status da Bolsa"
                                    onChange={e => setStatus(e.target.value)}/>
                            </div>                  

                        <div className="createButton">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <button type="reset" className="btn btn-secundary">Limpar</button>
                        </div>
                </div>
            </form>

        </div>                
    );
}

export default CreateBolsa;