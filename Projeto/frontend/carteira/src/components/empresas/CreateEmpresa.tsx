import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";


const CreateEmpresa = () => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [sigla, setSigla] = useState('');

    const [bolsaId, setBolsaId] = useState(0);

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    useEffect(() => {
        api.get('/bolsas')
            .then(response => {
                setBolsas(response.data);
            })
    }, []);


    const handleNewEmpresa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            nome,
            setor,
            sigla,            
            bolsa_id: bolsaId
        }

        try {
            await api.post('/empresas', data);
            navigate('/empresas');
        } catch (error) {
            alert('Erro ao cadastrar a Empresa!');
            console.error(error);
        }

    }

    return (
        <div className="container createForm">
            <h3>Cadastrar Empresa</h3>

            <form onSubmit={handleNewEmpresa} className="row g-3">

                <div>                           
                            <div>
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" 
                                    id="nome" 
                                    placeholder="Nome da Empresa"
                                    onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="setor" className="form-label">Setor</label>
                                <input type="text" className="form-control" 
                                    id="setor" 
                                    placeholder="Setor da empresa"
                                    onChange={e => setSetor(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="sigla" className="form-label">Sigla</label>
                                <input type="text" className="form-control" 
                                    id="sigla" 
                                    placeholder="Sigla da empresa"
                                    onChange={e => setSigla(e.target.value)}/>
                            </div>
                       
                            <div>
                                <label htmlFor="bolsa" className="form-label">Bolsa</label>
                                <select id="bolsa" className="form-select"                               
                                onChange={e => setBolsaId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    bolsas.map(item => (
                                        <option key={item.id} value={item.id}>{item.nome}</option>
                                    ))
                                }
                                </select>
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

export default CreateEmpresa;