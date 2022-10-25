import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectProdutos from '../produtos/SelectProdutos';
import SelectUnidades from '../unidades/SelectUnidades';


const UpdateDistribuicao = () => {

    const [ dataDistribuicao, setDataDistribuicao ] = useState('');
    
    const [ produtoId, setProdutoId ] = useState(0);
    const [ unidadeId, setUnidadeId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/distribuicoes/${id}`)
        .then(response => {
            setDataDistribuicao(response.data.data);
                setProdutoId(response.data.produto.id);
                setUnidadeId(response.data.unidade.id);
            })

    }, [id]);


    const handleUpdateDistribuicao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            date: dataDistribuicao,
            produto_id : produtoId,
            unidade_id : unidadeId
        }

        try {
            await api.put('/distribuicoes', data);
            navigate('/distribuicoes');
        } catch (error) {
            window.alert('Erro ao atualizar a Distribuição!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Distribuição: {dataDistribuicao}</h3>

            <form onSubmit={handleUpdateDistribuicao}>

                <div>
                    <label htmlFor="dataDistribuicao">Data da Distribuição</label>
                    <input
                        type="text"
                        name="dataDistribuicao"
                        id="dataDistribuicao"
                        placeholder="Data da Distribuição"
                        value={dataDistribuicao}
                        onChange={e => setDataDistribuicao(e.target.value)} />
                </div>

                <SelectProdutos 
                    id={produtoId}
                    setId={setProdutoId}
                />

                <SelectUnidades 
                    id={unidadeId}
                    setId={setUnidadeId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdateDistribuicao;