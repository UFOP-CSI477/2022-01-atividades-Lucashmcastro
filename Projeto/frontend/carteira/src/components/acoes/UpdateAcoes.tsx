import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectAtivos from '../ativos/SelectAtivos';

const UpdateAcao = () => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [ ativoId, setAtivoId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/acoes/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setDescricao(response.data.descricao);
                setAtivoId(response.data.ativo.id);
            })

    }, [id]);


    const handleUpdateAcao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));
        
        // Validações:
        const data = {
            id : intId,
            nome,
            descricao,
            ativo_id : ativoId
        }

        try {
            await api.put('/acoes', data);
            navigate('/acoes');
        } catch (error) {
            window.alert('Erro ao atualizar a Ação!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Ação: {nome}</h3>

            <form onSubmit={handleUpdateAcao}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da Ação"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        id="descricao"
                        placeholder="Descrição da Ação"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} />
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

export default UpdateAcao;