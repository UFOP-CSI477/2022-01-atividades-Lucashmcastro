import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { BolsaModel } from '../bolsas/ListBolsas';
import SelectBolsas from '../bolsas/SelectBolsas';

const UpdateAtivo = () => {

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    
    const [bolsaId, setBolsaId ] = useState(0);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);


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
        <div className="container createForm">

            <div className="section-header sectionPadding">               
                <h2> Atualizar Ativo</h2>
            </div>

            <form onSubmit={handleUpdateAtivo} className="row g-3">

                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input
                        className="form-control"
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
                        className="form-control"
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

export default UpdateAtivo;