import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { BolsaModel } from "../bolsas/ListBolsas";
import SelectBolsas from "../bolsas/SelectBolsas";
import { EmpresaModel } from "./ListEmpresas";

const UpdateEmpresa = () => {

    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [sigla, setSigla] = useState('');

    const [bolsaId, setBolsaId] = useState(0);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [empresas, setEmpresas] = useState<EmpresaModel>();



    const { id } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        api.get(`/empresas/${id}`)
        .then(response => {
            setNome(response.data.nome);
            setSetor(response.data.setor);
            setSigla(response.data.sigla);
                setBolsaId(response.data.bolsa.id);
                setEmpresas(response.data);
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
        <div className="container createForm">

                <div className="section-header sectionPadding">               
                    <h2> Atualizar Empresa</h2>
                </div>

            <form onSubmit={handleUpdateEmpresa} className="row g-3">

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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

export default UpdateEmpresa;