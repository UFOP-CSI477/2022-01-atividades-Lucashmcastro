import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectCidades from "../cidades/SelectCidades";

const UpdateUnidade = () => {

    const [ nome, setNome ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/unidades/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setNumero(response.data.numero);
            setComplemento(response.data.complemento);
                setCidadeId(response.data.cidade.id);
            })

    }, [id]);


    const handleUpdateUnidade = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome,
            numero,
            complemento,
            cidade_id : cidadeId
        }

        try {
            await api.put('/unidades', data);
            navigate('/unidades');
        } catch (error) {
            window.alert('Erro ao atualizar a Unidade!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar unidade: {nome}</h3>

            <form onSubmit={handleUpdateUnidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da unidade"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="numero">Numero</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="Numero da unidade"
                        value={numero}
                        onChange={e => setNumero(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="Complemento da unidade"
                        value={nome}
                        onChange={e => setComplemento(e.target.value)} />
                </div>

                <SelectCidades 
                    id={cidadeId}
                    setId={setCidadeId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateUnidade;