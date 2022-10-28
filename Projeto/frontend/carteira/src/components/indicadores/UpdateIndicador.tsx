import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";
import SelectBolsas from "../bolsas/SelectBolsas";
import { IndicadorModel } from "./ListIndicadores";

const UpdateIndicador = () => {

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');

    const [bolsaId, setBolsaId] = useState(0);

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [indicadores, setIndicadores] = useState<IndicadorModel[]>([])
    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/indicadores/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setTipo(response.data.tipo);
            setValor(response.data.valor);
                setBolsaId(response.data.bolsa.id);
                setIndicadores(response.data);
            })

    }, [id]);


    const handleUpdateIndicador = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome,
            tipo,
            valor,
            bolsa_id : bolsaId
        }

        try {
            await api.put('/indicadores', data);
            navigate('/indicadores');
        } catch (error) {
            window.alert('Erro ao atualizar a Indicador!');
            console.error(error);
            
        }

    }

    return (
        <div className="container createForm">

        <div className="section-header sectionPadding">               
            <h2> Atualizar Indicador</h2>
        </div>

            <form onSubmit={handleUpdateIndicador} className="row g-3">

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome do Indicador"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input
                        className="form-control"
                        type="text"
                        name="tipo"
                        id="tipo"
                        placeholder="Tipo do Indicador"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="nome">Valor (%)</label>
                    <input
                        className="form-control"
                        type="text" step="0.01"
                        name="valor"
                        id="valor"
                        placeholder="Valor  do Indicador"
                        value={valor}
                        onChange={e => setValor(e.target.value)} />
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

export default UpdateIndicador;