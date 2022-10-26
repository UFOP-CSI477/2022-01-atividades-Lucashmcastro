import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { EmpresaModel } from "./ListEmpresas";

interface SelectEmpresasProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectEmpresas = (props: SelectEmpresasProps) => {

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);

    useEffect(() => {

        api.get('/empresas')
            .then(response => {
                setEmpresas(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="empresa">Selecione a Empresa:</label>
            </div>
            <div>
                <select name="empresa"
                    id="empresa"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        empresas.map(item => (
                            <option value={item.id}>{item.nome}-{item.bolsa_id}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectEmpresas;