import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectBolsas from "../bolsas/SelectBolsas";

const UpdateEmpresa = () => {

    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [sigla, setSigla] = useState('');

    const [bolsaId, setBolsaId] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/bolsas/${id}`)
        .then(response => {
            setNome(response.data.nome);
                setBolsaId(response.data.bolsa.id);
            })

    }, [id]);


    const handleUpdateEmpresa = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const intId = parseInt(String(id));

        // Validações:
        const data = {
            id : intId,
            nome,
            setor,
            sigla,
            bolsa_id : bolsaId
        }

        try {
            await api.put('/empresas', data);
            navigate('/empresas');
        } catch (error) {
            window.alert('Erro ao atualizar a Empresa!');
            console.error(error);
            
        }

    }

    return (
        <div>
            <h3>Atualizar Empresa: {nome}</h3>

            <form onSubmit={handleUpdateEmpresa}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da empresa"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="nome">Setor</label>
                    <input
                        type="text"
                        name="setor"
                        id="setor"
                        placeholder="Setor da cidade"
                        value={setor}
                        onChange={e => setSetor(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input
                        type="text"
                        name="sigla"
                        id="sigla"
                        placeholder="Sigla da empresa"
                        value={sigla}
                        onChange={e => setSigla(e.target.value)} />
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

export default UpdateEmpresa;