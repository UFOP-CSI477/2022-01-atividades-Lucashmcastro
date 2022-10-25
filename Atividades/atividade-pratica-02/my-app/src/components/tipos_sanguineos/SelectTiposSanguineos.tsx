import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { TipoSanguineoModel } from "./ListTiposSanguineos";

interface SelectTiposSanguineosProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectTiposSanguineos = (props: SelectTiposSanguineosProps) => {

    const [tiposSanguineos, setTiposSanguineos] = useState<TipoSanguineoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/tiposSanguineos')
            .then(response => {
                setTiposSanguineos(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="tipoSanguineo">Selecione o Tipo Sanguineo:</label>
            </div>
            <div>
                <select name="tipoSanguineo"
                    id="tipoSanguineo"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        tiposSanguineos.map(item => (
                            <option value={item.id}>{item.tipo}-{item.fator}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectTiposSanguineos;