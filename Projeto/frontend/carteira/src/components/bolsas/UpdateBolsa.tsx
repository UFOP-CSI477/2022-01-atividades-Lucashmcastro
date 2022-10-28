import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { BolsaModel } from "./ListBolsas";

const UpdateBolsa = () => {

    const [nome, setNome] = useState('');
    const [origem, setOrigem] = useState('');
    const [status, setStatus] = useState('');
    const [ bolsa, setBolsa ] = useState<BolsaModel>();


    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/bolsas/${id}`)
        .then(response => {
            setBolsa(response.data);
            setNome(response.data.nome);
            setOrigem(response.data.origem);
            setStatus(response.data.status);
                
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
        <div className="container createForm">

                <div className="section-header sectionPadding">               
                    <h2> Atualizar Bolsa: {nome}  </h2>
                </div>

            <form onSubmit={handleUpdateBolsa} className="row g-3">

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        type="text"
                        name="status"
                        id="status"
                        placeholder="Status da Bolsa"
                        value={status}
                        onChange={e => setStatus(e.target.value)} />
                </div>             

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

export default UpdateBolsa;