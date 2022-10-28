import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EmpresaModel } from "../empresas/ListEmpresas";
import { BolsaModel } from "../bolsas/ListBolsas";


const CreateCotacao = () => {

    const navigate = useNavigate();

    const [valor, setValor] = useState('');
    const [date, setDate] = useState('');

    const [empresaId, setEmpresaId] = useState(0);
    const [bolsaId, setBolsaId] = useState(0);

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    useEffect(() => {
        api.get('/bolsas')
            .then(response => {
                setBolsas(response.data);
            })
    }, []);

    useEffect(() => {
        api.get('/empresas')
            .then(response => {
                setEmpresas(response.data);
            })
    }, []);

    const handleNewCotacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            valor,
            date: new Date (date).toLocaleDateString(),
            bolsa_id: bolsaId,
            empresa_id: empresaId
        }

        try {
            await api.post('/cotacoes', data);
            navigate('/cotacoes');
        } catch (error) {
            alert('Erro ao cadastrar a Cotação!');
            console.error(error);
        }

    }

    return (
        <div className="container createForm">
            <h3>Cadastrar Cotação</h3>

            <form onSubmit={handleNewCotacao} className="row g-3">

                <div>                           
                            <div>
                                <label htmlFor="valor" className="form-label">Valor</label>
                                <input type="text" className="form-control" 
                                    id="valor" 
                                    placeholder="Valor cotado"
                                    onChange={e => setValor(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="dataCotacao" className="form-label">Data da Cotação</label>
                                <input type="date" className="form-control" 
                                    id="dataCotacao" 
                                    placeholder="Data da Cotação"
                                    onChange={e => setDate(e.target.value)}/>
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

                            <div>
                                <label htmlFor="empresa" className="form-label">Empresa</label>
                                <select id="empresa" className="form-select"                               
                                onChange={e => setEmpresaId(parseInt(e.target.value))}>
                                <option
                                value="0" selected>Selecione</option>

                                {
                                    empresas.map(item => (
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

export default CreateCotacao;