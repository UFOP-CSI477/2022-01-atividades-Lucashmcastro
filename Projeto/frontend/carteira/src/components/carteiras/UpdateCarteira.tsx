import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectAtivos from '../ativos/SelectAtivos';

const UpdateCarteira = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [status, setStatus] = useState('');

    const [ ativoId, setAtivoId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/carteiras/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setCpf(response.data.cpf);
            setStatus(response.data.status);
                setAtivoId(response.data.ativo.id);
            })

    }, [id]);


    const handleUpdateCarteira = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));
        
        // Validações:
        const data = {
            id : intId,
            nome,
            cpf,
            status,
            ativo_id : ativoId
        }

        try {
            await api.put('/carteiras', data);
            navigate('/carteiras');
        } catch (error) {
            window.alert('Erro ao atualizar a Carteira!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Carteira: {nome}</h3>

            <form onSubmit={handleUpdateCarteira}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Valor da Carteira"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="CPF da Carteira"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <input
                        type="text"
                        name="status"
                        id="status"
                        placeholder="Status da Carteira"
                        value={cpf}
                        onChange={e => setStatus(e.target.value)} />
                </div>             

                <SelectAtivos
                    id={ativoId}
                    setId={setAtivoId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateCarteira;