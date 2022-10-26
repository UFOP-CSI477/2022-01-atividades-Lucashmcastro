import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectBolsas from "../bolsas/SelectBolsas";

const UpdateIndicador = () => {

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');

    const [bolsaId, setBolsaId] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/indicadores/${id}`)
        .then(response => {
            setNome(response.data.nome);
                setBolsaId(response.data.bolsa.id);
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
        <div>
            <h3>Atualizar Indicador: {nome}</h3>

            <form onSubmit={handleUpdateIndicador}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
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
                        type="text"
                        name="tipo"
                        id="tipo"
                        placeholder="Tipo do Indicador"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="nome">Valor</label>
                    <input
                        type="text"
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

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateIndicador;