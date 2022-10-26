import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectEmpresas from '../empresas/SelectEmpresas';
import SelectBolsas from '../bolsas/SelectBolsas';

const UpdateCotacao = () => {

    const [ valor, setValor ] = useState('');
    const [ date, setDate ] = useState('');
    
    const [ empresaId, setEmpresaId ] = useState(0);
    const [ bolsaId, setBolsaId ] = useState(0);

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
        <div>
            <h3>Atualizar Cotação: {valor}</h3>

            <form onSubmit={handleUpdateCotacao}>

                <div>
                    <label htmlFor="valor">Valor</label>
                    <input
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
                        type="text"
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

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateCotacao;