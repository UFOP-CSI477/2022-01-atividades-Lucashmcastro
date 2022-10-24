import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import SelectCidades from '../cidades/SelectCidades';
import SelectTiposSanguineos from '../tipos_sanguineos/SelectTiposSanguineos';


const UpdatePessoa = () => {
   
    const [nome, setNome ] = useState('');
    const [rua, setRua ] = useState('');
    const [numero, setNumero ] = useState('');
    const [complemento, setComplemento ] = useState('');
    const [documento, setDocumento ] = useState('');

    const [ cidadeId, setCidadeId ] = useState(0);
    const [ tipoSanguineoId, setTipoSanguineoId ] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        
        api.get(`/pessoas/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setRua(response.data.rua);
            setNumero(response.data.numero);
            setComplemento(response.data.complemento);
            setDocumento(response.data.documento);
                setCidadeId(response.data.cidade.id);
                setTipoSanguineoId(response.data.tipoSanguineo.id);
            })

    }, [id]);


    const handleUpdatePessoa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome,
            rua,
            numero,
            complemento,
            documento,
            cidade_id : cidadeId,
            tipoSanguineo_id : tipoSanguineoId
        }

        try {
            await api.put('/pessoas', data);
            navigate('/pessoas');
        } catch (error) {
            window.alert('Erro ao atualizar Pessoa!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Pessoa: {nome}</h3>

            <form onSubmit={handleUpdatePessoa}>

                <div>
                    <label htmlFor="nome">Nome da Pessoa</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da Pessoa"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="rua">Rua da Pessoa</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        placeholder="Rua da Pessoa"
                        value={rua}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="numero">Numero da Pessoa</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="Numero da Pessoa"
                        value={numero}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento da Pessoa</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="Complemento da Pessoa"
                        value={complemento}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="documento">Documento da Pessoa</label>
                    <input
                        type="text"
                        name="documento"
                        id="documento"
                        placeholder="Documento da Pessoa"
                        value={documento}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <SelectCidades 
                    id={cidadeId}
                    setId={setCidadeId}
                />

                <SelectTiposSanguineos 
                    id={tipoSanguineoId}
                    setId={setTipoSanguineoId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    )

}

export default UpdatePessoa;