import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { IndicadorModel } from "./ListIndicadores";

interface SelectIndicadoresProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectIndicadores = (props: SelectIndicadoresProps) => {

    const [indicadores, setIndicadores] = useState<IndicadorModel[]>([]);

    useEffect(() => {

        api.get('/indicadores')
            .then(response => {
                setIndicadores(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="indicador">Selecione o Indicador:</label>
            </div>
            <div>
                <select name="indicador"
                    id="indicador"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        indicadores.map(item => (
                            <option value={item.id}>{item.nome}-{item.bolsa?.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectIndicadores;