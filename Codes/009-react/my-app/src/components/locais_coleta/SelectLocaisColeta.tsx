import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { LocalColetaModel } from "./ListLocaisColeta";

interface SelectLocaisColetaProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectLocaisColeta= (props: SelectLocaisColetaProps) => {

    const [locaisColeta, setLocaisColeta] = useState<LocalColetaModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/locaisColeta')
            .then(response => {
                setLocaisColeta(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="localColeta">Selecione o Local de Coleta:</label>
            </div>
            <div>
                <select name="localColeta"
                    id="localColeta"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        locaisColeta.map(item => (
                            <option value={item.id}>{item.nome}-{item.cidade_id}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectLocaisColeta;