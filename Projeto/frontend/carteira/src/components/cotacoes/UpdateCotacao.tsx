import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectEmpresas from '../empresas/SelectEmpresas';
import SelectBolsas from '../bolsas/SelectBolsas';
import { BolsaModel } from '../bolsas/ListBolsas';
import { EmpresaModel } from '../empresas/ListEmpresas';

const UpdateCotacao = () => {

    const [ valor, setValor ] = useState('');
    const [ date, setDate ] = useState('');
    
    const [ empresaId, setEmpresaId ] = useState(0);
    const [ bolsaId, setBolsaId ] = useState(0);

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/cotacoes/${id}`)
        .then(response => {
            setValor(response.data.valor);
            setDate(response.data.data);
                setEmpresaId(response.data.empresa.id);
                setBolsaId(response.data.bolsa.id);
            })

    }, [id]);


    const handleUpdateCotacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));
        
        // Validações:
        const data = {
            id : intId,
            valor,
            date,
            empresa_id : empresaId,
            bolsa_id : bolsaId
        }

        try {
            await api.put('/cotacoes', data);
            navigate('/cotacoes');
        } catch (error) {
            window.alert('Erro ao atualizar a Cotação!');
            console.error(error);
            
        }

    }

    return (
        <div className="container createForm">

            <div className="section-header sectionPadding">               
                <h2> Atualizar Cotação</h2>
            </div>

            <form onSubmit={handleUpdateCotacao} className="row g-3">

                <div>
                    <label htmlFor="valor">Valor</label>
                    <input
                    className="form-control"
                        type="text"
                        name="valor"
                        id="valor"
                        placeholder="Valor da cotação"
                        value={valor}
                        onChange={e => setValor(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="date">Data</label>
                    <input
                        className="form-control"
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Data da Cotação"
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                </div>

                <SelectEmpresas 
                    id={empresaId}
                    setId={setEmpresaId}
                />

                <SelectBolsas 
                    id={bolsaId}
                    setId={setBolsaId}
                />

                <div className="row createButtonBoth">
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-success">Atualizar</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger" type="reset">Limpar</button>
                    </div>
                </div>

            </form>            

        </div>
    )

}

export default UpdateCotacao;