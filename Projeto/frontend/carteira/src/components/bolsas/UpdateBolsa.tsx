import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const UpdateBolsa = () => {

    const [nome, setNome] = useState('');
    const [origem, setOrigem] = useState('');
    const [status, setStatus] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/doacoes/${id}`)
        .then(response => {
            setNome(response.data.data);
                
            })

    }, [id]);


    const handleUpdateBolsa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));
        
        // Validações:
        const data = {
            id : intId,
            nome,
            origem,
            status
        }

        try {
            await api.put('/bolsas', data);
            navigate('/bolsas');
        } catch (error) {
            window.alert('Erro ao atualizar a Bolsa!');
            console.error(error);
            
        }
    }

    return (
        <div>
            <h3>Atualizar Bolsa: {nome}</h3>

            <form onSubmit={handleUpdateBolsa}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da Bolsa"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="origem">Origem</label>
                    <input
                        type="text"
                        name="origem"
                        id="origem"
                        placeholder="Origem da Bolsa"
                        value={origem}
                        onChange={e => setOrigem(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <input
                        type="text"
                        name="status"
                        id="status"
                        placeholder="Status da Bolsa"
                        value={origem}
                        onChange={e => setStatus(e.target.value)} />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateBolsa;