import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectBolsas from '../bolsas/SelectBolsas';

const UpdateAtivo = () => {

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');

    const [bolsaId, setBolsaId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/ativos/${id}`)
        .then(response => {
            setTipo(response.data.tipo);
            setDescricao(response.data.descricao);           
                setBolsaId(response.data.bolsa.id);
            })

    }, [id]);


    const handleUpdateAtivo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));
        
        // Validações:
        const data = {
            id : intId,
            tipo,
            descricao,
            bolsa_id : bolsaId
        }

        try {
            await api.put('/ativos', data);
            navigate('/ativos');
        } catch (error) {
            window.alert('Erro ao atualizar o Ativo!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Ativo: {tipo}</h3>

            <form onSubmit={handleUpdateAtivo}>

                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input
                        type="text"
                        name="tipo"
                        id="tipo"
                        placeholder="Tipo do Ativo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        id="descricao"
                        placeholder="Descrição do Ativo"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} />
                </div>
                 
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

export default UpdateAtivo;