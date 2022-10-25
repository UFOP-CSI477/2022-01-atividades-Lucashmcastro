import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { CidadeModel } from "./ListCidades";

interface SelectCidadesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectCidades = (props: SelectCidadesProps) => {

    const [cidades, setCidades] = useState<CidadeModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="cidade">Selecione a Cidade:</label>
            </div>
            <div>
                <select name="cidade"
                    id="cidade"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        cidades.map(item => (
                            <option value={item.id}>{item.nome}-{item.estado_id}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectCidades;