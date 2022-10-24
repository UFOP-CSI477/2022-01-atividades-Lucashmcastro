import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectDoacoes from "../produtos/SelectProdutos";

const UpdateProduto = () => {

    const [ etiqueta, setEtiqueta ] = useState('');
    const [ validade, setValidade ] = useState('');
    const [ doacaoId, setDoacaoId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/produtos/${id}`)
        .then(response => {
            setEtiqueta(response.data.etiqueta);
            setValidade(response.data.validade);
                setDoacaoId(response.data.doacao.id);
            })

    }, [id]);


    const handleUpdateProduto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            etiqueta,
            validade,
            doacao_id : doacaoId
        }

        try {
            await api.put('/produtos', data);
            navigate('/produtos');
        } catch (error) {
            window.alert('Erro ao atualizar o Produto!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar produto: {etiqueta}</h3>

            <form onSubmit={handleUpdateProduto}>

                <div>
                    <label htmlFor="etiqueta">Etiqueta</label>
                    <input
                        type="text"
                        name="etiqueta"
                        id="etiqueta"
                        placeholder="Etiqueta do Produto"
                        value={etiqueta}
                        onChange={e => setEtiqueta(e.target.value)} />
                </div>

                <SelectDoacoes 
                    id={doacaoId}
                    setId={setDoacaoId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateProduto;