import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { AtivoModel } from '../ativos/ListAtivos';
import SelectAtivos from '../ativos/SelectAtivos';

const UpdateAcao = () => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ativos, setAtivos] = useState<AtivoModel[]>([]);


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
        <div className="container createForm">
            
            
            <div className="section-header sectionPadding">               
                    <h2> Atualizar Ação</h2>
            </div>

            <form onSubmit={handleUpdateAcao} className="row g-3">

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control"
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
                        className="form-control"
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

export default UpdateAcao;