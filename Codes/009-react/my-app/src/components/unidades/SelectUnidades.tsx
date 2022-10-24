import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { UnidadeModel } from "./ListUnidades";

interface SelectUnidadesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectUnidades = (props: SelectUnidadesProps) => {

    const [unidades, setUnidades] = useState<UnidadeModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/unidades')
            .then(response => {
                setUnidades(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="unidade">Selecione a Unidade:</label>
            </div>
            <div>
                <select name="unidade"
                    id="unidade"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        unidades.map(item => (
                            <option value={item.id}>{item.nome}-{item.cidade_id}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectUnidades;  