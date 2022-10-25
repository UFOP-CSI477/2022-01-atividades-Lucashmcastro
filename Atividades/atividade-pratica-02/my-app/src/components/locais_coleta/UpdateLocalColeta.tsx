import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectCidades from "../cidades/SelectCidades";

const UpdateLocalColeta = () => {

    const [ nome, setNome ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/locaisColeta/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setRua(response.data.rua);
            setNumero(response.data.numero);
            setComplemento(response.data.complemento);
                setCidadeId(response.data.cidade.id);
            })

    }, [id]);


    const handleUpdateLocalColeta = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome,
            rua,
            numero,
            complemento,
            cidade_id : cidadeId
        }

        try {
            await api.put('/locaisColeta', data);
            navigate('/locaisColeta');
        } catch (error) {
            window.alert('Erro ao atualizar o Local de Coleta!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Local Coleta: {nome}</h3>

            <form onSubmit={handleUpdateLocalColeta}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome do Local de Coleta"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="rua">Rua</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        placeholder="Rua do Local de Coleta"
                        value={rua}
                        onChange={e => setRua(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="numero">Numero</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="Numero do Local de Coleta"
                        value={numero}
                        onChange={e => setNumero(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="Complemento do Local de Coleta"
                        value={complemento}
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

export default UpdateLocalColeta;