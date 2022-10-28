import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { EmpresaModel } from "./ListEmpresas";
import { BolsaModel } from "../bolsas/ListBolsas";

interface SelectEmpresasProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectEmpresas = (props: SelectEmpresasProps) => {

    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [sigla, setSigla] = useState('');

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);


    useEffect(() => {

        api.get('/empresas')
            .then(response => {
                setEmpresas(response.data);
                setBolsas(response.data.bolsas);
                setNome(response.data.nome);
                setSetor(response.data.setor);
                setSigla(response.data.sigla);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="empresa">Selecione a Empresa</label>
            </div>
            <div>
                <select name="empresa"
                    className="form-control"
                    id="empresa"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        empresas.map(item => (
                            <option value={item.id}>{item.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectEmpresas;