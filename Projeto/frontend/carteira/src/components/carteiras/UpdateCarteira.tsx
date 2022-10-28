import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { AtivoModel } from '../ativos/ListAtivos';
import SelectAtivos from '../ativos/SelectAtivos';

const UpdateCarteira = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [status, setStatus] = useState('');

    const [ ativoId, setAtivoId ] = useState(0);
    const [ativos, setAtivos] = useState<AtivoModel[]>([]);

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
        <div className="container createForm">

                <div className="section-header sectionPadding">               
                    <h2> Atualizar Carteira </h2>
                </div>

            <form onSubmit={handleUpdateCarteira} className="row g-3">

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        type="text"
                        name="status"
                        id="status"
                        placeholder="Status da Carteira"
                        value={status}
                        onChange={e => setStatus(e.target.value)} />
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

export default UpdateCarteira;