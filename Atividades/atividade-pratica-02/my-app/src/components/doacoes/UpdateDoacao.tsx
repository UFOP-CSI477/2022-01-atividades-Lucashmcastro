import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectPessoas from '../pessoas/SelectPessoas';
import SelectLocaisColeta from '../locais_coleta/SelectLocaisColeta';


const UpdateDoacao = () => {

    const [ dataDoacao, setDataDoacao ] = useState('');
    
    const [ pessoaId, setPessoaId ] = useState(0);
    const [ localColetaId, setLocalColetaId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/doacoes/${id}`)
        .then(response => {
            setDataDoacao(response.data.data);
                setPessoaId(response.data.pessoa.id);
                setLocalColetaId(response.data.localColeta.id);
            })

    }, [id]);


    const handleUpdateDoacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));
        
        // Validações:
        const data = {
            id : intId,
            date: dataDoacao,
            pessoa_id : pessoaId,
            local_id : localColetaId
        }

        try {
            await api.put('/doacoes', data);
            navigate('/doacoes');
        } catch (error) {
            window.alert('Erro ao atualizar a Doação!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Doação: {dataDoacao}</h3>

            <form onSubmit={handleUpdateDoacao}>

                <div>
                    <label htmlFor="dataDoacao">Data da Doação</label>
                    <input
                        type="text"
                        name="dataDoacao"
                        id="dataDoacao"
                        placeholder="Data da Doação"
                        value={dataDoacao}
                        onChange={e => setDataDoacao(e.target.value)} />
                </div>

                <SelectPessoas 
                    id={pessoaId}
                    setId={setPessoaId}
                />

                <SelectLocaisColeta 
                    id={localColetaId}
                    setId={setLocalColetaId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateDoacao;